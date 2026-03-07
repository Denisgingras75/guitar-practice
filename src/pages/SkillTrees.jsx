import { useState } from 'react';
import { TREES, TIER_NAMES, ALL_NODES, getTreeNodes, getTierNodes } from '../data/curriculum/index.js';
import { useSkillProgress } from '../hooks/useSkillProgress.js';
import SkillNode from '../components/SkillNode.jsx';
import styles from './SkillTrees.module.css';

function ProgressBar({ done, total, percent }) {
  return (
    <div className={styles.progressWrap}>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${percent}%` }} />
      </div>
      <span className={styles.progressText}>{done}/{total}</span>
    </div>
  );
}

function NodeCard({ node, isCompleted, isUnlocked, isSelected, onSelect }) {
  return (
    <button
      className={`${styles.nodeCard} ${isCompleted ? styles.nodeCompleted : isUnlocked ? styles.nodeAvailable : styles.nodeLocked}`}
      onClick={() => onSelect(node.id)}
    >
      <span className={styles.nodeIcon}>
        {isCompleted ? '\u2713' : isUnlocked ? '\u25CB' : '\u25CF'}
      </span>
      <span className={styles.nodeName}>{node.name}</span>
      {isSelected && <span className={styles.nodeChevron}>{'\u25B2'}</span>}
    </button>
  );
}

export default function SkillTrees() {
  const [expandedTree, setExpandedTree] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const { isCompleted, getTreeProgress, getTierProgress, arePrereqsMet } = useSkillProgress();

  const overallProgress = getTreeProgress(ALL_NODES);

  const handleSelectNode = (nodeId) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
  };

  return (
    <div className={styles.page}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>Skill Trees</h2>
        <div className={styles.overallStats}>
          <span className={styles.overallPercent}>{overallProgress.percent}%</span>
          <span className={styles.overallLabel}>{overallProgress.done}/{overallProgress.total} skills</span>
        </div>
      </div>

      <ProgressBar {...overallProgress} />

      <div className={styles.treeList}>
        {TREES.map((tree) => {
          const treeNodes = getTreeNodes(tree.id);
          const progress = getTreeProgress(treeNodes);
          const isExpanded = expandedTree === tree.id;

          return (
            <div key={tree.id} className={styles.treeCard}>
              <button
                className={styles.treeToggle}
                onClick={() => setExpandedTree(isExpanded ? null : tree.id)}
              >
                <div className={styles.treeHeader}>
                  <div className={styles.treeInfo}>
                    <span className={styles.treeName}>{tree.name}</span>
                    <span className={styles.treeDesc}>{tree.description}</span>
                  </div>
                  <div className={styles.treeStats}>
                    <span className={styles.treePercent}>{progress.percent}%</span>
                    <span className={styles.chevron}>{isExpanded ? '\u25B2' : '\u25BC'}</span>
                  </div>
                </div>
                <div className={styles.treeProgressBar}>
                  <div className={styles.treeProgressFill} style={{ width: `${progress.percent}%` }} />
                </div>
              </button>

              {isExpanded && (
                <div className={styles.tiers}>
                  {TIER_NAMES.map((tierName, tierIdx) => {
                    const tier = tierIdx + 1;
                    const tierNodes = getTierNodes(tree.id, tier);
                    if (tierNodes.length === 0) return null;
                    const tierProgress = getTierProgress(ALL_NODES, tree.id, tier);

                    return (
                      <div key={tier} className={styles.tier}>
                        <div className={styles.tierHeader}>
                          <span className={styles.tierName}>{tierName}</span>
                          <span className={styles.tierCount}>
                            {tierProgress.done}/{tierProgress.total}
                          </span>
                        </div>

                        <div className={styles.nodeList}>
                          {tierNodes.map((node) => {
                            const completed = isCompleted(node.id);
                            const unlocked = arePrereqsMet(node);
                            const isSelected = selectedNode === node.id;

                            return (
                              <div key={node.id}>
                                <NodeCard
                                  node={node}
                                  isCompleted={completed}
                                  isUnlocked={unlocked}
                                  isSelected={isSelected}
                                  onSelect={handleSelectNode}
                                />
                                {isSelected && (
                                  <SkillNode
                                    node={node}
                                    onClose={() => setSelectedNode(null)}
                                  />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
