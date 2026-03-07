import { useLocalStorage } from './useLocalStorage.js';

export function useSkillProgress() {
  const [completed, setCompleted] = useLocalStorage('skill-progress', {});

  const isCompleted = (nodeId) => !!completed[nodeId];

  const toggleNode = (nodeId) => {
    setCompleted((prev) => {
      const next = { ...prev };
      if (next[nodeId]) {
        delete next[nodeId];
      } else {
        next[nodeId] = Date.now();
      }
      return next;
    });
  };

  const getTreeProgress = (nodes) => {
    const total = nodes.length;
    const done = nodes.filter((n) => completed[n.id]).length;
    return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
  };

  const getTierProgress = (nodes, tree, tier) => {
    const tierNodes = nodes.filter((n) => n.tree === tree && n.tier === tier);
    return getTreeProgress(tierNodes);
  };

  const arePrereqsMet = (node) => {
    if (!node.prerequisites || node.prerequisites.length === 0) return true;
    return node.prerequisites.every((id) => completed[id]);
  };

  return { isCompleted, toggleNode, getTreeProgress, getTierProgress, arePrereqsMet };
}
