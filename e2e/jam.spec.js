import { test, expect } from '@playwright/test';

test.describe('Jam Page', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
  });

  test('navigates to Jam page via nav', async ({ page }) => {
    await page.goto('/');
    // Open Songs dropdown
    await page.getByRole('button', { name: /Songs/i }).click();
    await page.getByRole('link', { name: 'Jam' }).click();
    await expect(page).toHaveURL('/jam');
    await expect(page.getByRole('heading', { name: 'Jam' })).toBeVisible();
  });

  test('shows empty state when no songs added', async ({ page }) => {
    await page.goto('/jam');
    await expect(page.getByText('No songs yet')).toBeVisible();
    await expect(page.getByText('Add Your First Song')).toBeVisible();
  });

  test('can add a song from library', async ({ page }) => {
    await page.goto('/jam');
    await page.getByRole('button', { name: /Add Song/i }).first().click();
    await expect(page.getByRole('heading', { name: 'Add from Library' })).toBeVisible();

    // Search for a specific song
    await page.getByPlaceholder('Search songs, artists, keys').fill('Oye Como Va');

    // Add the song
    await page.getByRole('button', { name: '+ Add' }).first().click();

    // Go back to jam list
    await page.getByRole('button', { name: /Back/i }).click();

    // Song should appear in "Want to Know" bucket
    await expect(page.getByText('Oye Como Va')).toBeVisible();
  });

  test('can move song between buckets', async ({ page }) => {
    await page.goto('/jam');

    // Add a song first
    await page.getByRole('button', { name: /Add Song/i }).first().click();
    await page.getByPlaceholder('Search songs, artists, keys').fill('Paranoid');
    await page.getByRole('button', { name: '+ Add' }).first().click();
    await page.getByRole('button', { name: /Back/i }).click();

    // Open the song
    await page.getByText('Paranoid').click();

    // Move to "Working On"
    await page.getByRole('button', { name: 'Start Learning' }).click();

    // Go back and verify it moved
    await page.getByRole('button', { name: /Jam/i }).click();

    // "Want to Know" should show 0, "Working On" should show 1 and contain Paranoid
    await expect(page.getByText('WORKING ON').locator('..').locator('..').getByText('Paranoid')).toBeVisible();
  });

  test('can view chart for a song', async ({ page }) => {
    await page.goto('/jam');

    // Add a song
    await page.getByRole('button', { name: /Add Song/i }).first().click();
    await page.getByPlaceholder('Search songs, artists, keys').fill('Evil Ways');
    await page.getByRole('button', { name: '+ Add' }).first().click();
    await page.getByRole('button', { name: /Back/i }).click();

    // Open the song
    await page.getByText('Evil Ways').click();

    // Should see the chart rendered
    await expect(page.getByText('Santana')).toBeVisible();
    await expect(page.getByText('Key of Gm')).toBeVisible();

    // Should see action buttons
    await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Print' })).toBeVisible();
  });

  test('can edit a song chart', async ({ page }) => {
    await page.goto('/jam');

    // Add a song
    await page.getByRole('button', { name: /Add Song/i }).first().click();
    await page.getByPlaceholder('Search songs, artists, keys').fill('Heart of Gold');
    await page.getByRole('button', { name: '+ Add' }).first().click();
    await page.getByRole('button', { name: /Back/i }).click();

    // Open and edit
    await page.getByText('Heart of Gold').click();
    await page.getByRole('button', { name: 'Edit' }).click();

    // Should see edit heading
    await expect(page.getByRole('heading', { name: /Edit/ })).toBeVisible();

    // Editor should have content
    const editor = page.locator('textarea');
    const text = await editor.inputValue();
    expect(text).toContain('@title Heart of Gold');

    // Modify the tempo
    await editor.fill(text.replace('@tempo 98', '@tempo 100'));

    // Save
    await page.getByRole('button', { name: 'Save Changes' }).click();

    // Should be back on chart view (no edit heading)
    await expect(page.getByRole('heading', { name: /Edit/ })).not.toBeVisible();
  });

  test('can add a new version to a song', async ({ page }) => {
    await page.goto('/jam');

    // Add a song
    await page.getByRole('button', { name: /Add Song/i }).first().click();
    await page.getByPlaceholder('Search songs, artists, keys').fill('Ripple');
    await page.getByRole('button', { name: '+ Add' }).first().click();
    await page.getByRole('button', { name: /Back/i }).click();

    // Open the song
    await page.getByText('Ripple').click();

    // Should see version tab "Chord Chart"
    await expect(page.getByRole('button', { name: 'Chord Chart' })).toBeVisible();

    // Click + to add version
    await page.getByRole('button', { name: '+' }).click();
    await expect(page.getByRole('heading', { name: 'Add Version' })).toBeVisible();

    // Select "Tab" type
    await page.getByRole('button', { name: 'Tab' }).click();

    // Paste some content
    await page.locator('textarea').fill('@title Ripple (Tab)\n@key G\n\n[A] Verse\n| G | G | C | C |');

    // Save
    await page.getByRole('button', { name: 'Save Version' }).click();

    // Should now see two version tabs
    await expect(page.getByRole('button', { name: 'Tab' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Chord Chart' })).toBeVisible();
  });

  test('can paste and convert UG format', async ({ page }) => {
    await page.goto('/jam');

    await page.getByRole('button', { name: /Add Song/i }).first().click();
    await page.getByRole('button', { name: 'Paste Chart' }).click();

    // Paste UG-style text
    const ugText = `[Verse]
G          C          D
Some lyrics here today
Em         C          G
More lyrics on the way

[Chorus]
C    D    G    Em
Singing all day long
C    D    G    G
Singing all night too`;

    await page.locator('textarea').fill(ugText);

    // Should detect UG format
    await expect(page.getByText('Detected Ultimate Guitar format')).toBeVisible();

    // Convert
    await page.getByRole('button', { name: 'Convert to Chart' }).click();

    // Editor should now have Nashville format
    const converted = await page.locator('textarea').inputValue();
    expect(converted).toContain('@key');
    expect(converted).toContain('@structure');
  });

  test('search filters songs in buckets', async ({ page }) => {
    await page.goto('/jam');

    // Add two songs
    await page.getByRole('button', { name: /Add Song/i }).first().click();
    await page.getByPlaceholder('Search songs, artists, keys').fill('Paranoid');
    await page.getByRole('button', { name: '+ Add' }).first().click();
    await page.getByPlaceholder('Search songs, artists, keys').fill('Ripple');
    await page.getByRole('button', { name: '+ Add' }).first().click();
    await page.getByRole('button', { name: /Back/i }).click();

    // Both should be visible
    await expect(page.getByText('Paranoid')).toBeVisible();
    await expect(page.getByText('Ripple')).toBeVisible();

    // Search for one
    await page.getByPlaceholder('Search your repertoire').fill('Paranoid');
    await expect(page.getByText('Paranoid')).toBeVisible();
    // Ripple should be filtered out (not visible in any bucket)
    await expect(page.locator('button', { hasText: 'Ripple' })).not.toBeVisible();
  });

  test('can remove a song', async ({ page }) => {
    await page.goto('/jam');

    // Add a song
    await page.getByRole('button', { name: /Add Song/i }).first().click();
    await page.getByPlaceholder('Search songs, artists, keys').fill('Wonderwall');
    await page.getByRole('button', { name: '+ Add' }).first().click();
    await page.getByRole('button', { name: /Back/i }).click();

    // Open and remove
    await page.getByText('Wonderwall').click();
    await page.getByRole('button', { name: 'Remove' }).click();

    // Should be back on list, no songs
    await expect(page.getByText('No songs yet')).toBeVisible();
  });

  test('shows level badges on song cards', async ({ page }) => {
    await page.goto('/jam');

    // Add an easy song
    await page.getByRole('button', { name: /Add Song/i }).first().click();
    await page.getByPlaceholder('Search songs, artists, keys').fill('Oye Como Va');
    await page.getByRole('button', { name: '+ Add' }).first().click();
    await page.getByRole('button', { name: /Back/i }).click();

    // Should show "easy" badge
    await expect(page.getByText('easy')).toBeVisible();
  });

  test('version count shows on song card when multiple versions', async ({ page }) => {
    await page.goto('/jam');

    // Add a song
    await page.getByRole('button', { name: /Add Song/i }).first().click();
    await page.getByPlaceholder('Search songs, artists, keys').fill('Free Fallin');
    await page.getByRole('button', { name: '+ Add' }).first().click();
    await page.getByRole('button', { name: /Back/i }).click();

    // Open and add a second version
    await page.getByText("Free Fallin'").click();
    await page.getByRole('button', { name: '+' }).click();
    await page.getByRole('button', { name: 'Tab' }).click();
    await page.locator('textarea').fill('@title Free Fallin Tab\n@key F\n\n[A] Main\n| D | Asus4 | D | Asus4 |');
    await page.getByRole('button', { name: 'Save Version' }).click();

    // Go back to list
    await page.getByRole('button', { name: /Jam/i }).click();

    // Should show "2 versions" badge
    await expect(page.getByText('2 versions')).toBeVisible();
  });
});
