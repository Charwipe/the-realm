export interface Realm {
  id: string;
  name: string;
  description: string;
  atmosphere: string;
  icon: string;
  gradient: string;
  // Psychological framing
  groundLayer: string;
  problems: string[];
  insights: string;
}

export const realms: Realm[] = [
  {
    id: "ocean-of-being",
    name: "The Ocean of Being",
    description: "Consciousness as the field in which everything appears.",
    atmosphere: "You stand at the shore of an endless sea. The waters glow with a soft bioluminescence, each wave a thought arising and passing. Here, you are both the observer and the observed, floating in the primordial depths of consciousness itself.",
    icon: "🌊",
    gradient: "from-cyan-900/40 via-blue-900/30 to-indigo-900/40",
    groundLayer: "Non-dual framing: all you ever have access to is experience",
    problems: ["Existential confusion", "Identity struggles", "Detachment"],
    insights: "You are not separate from experience; there is stability beneath all content.",
  },
  {
    id: "theatre-of-perception",
    name: "The Theatre of Perception",
    description: "Reality as a constructed model, a controlled hallucination.",
    atmosphere: "Velvet curtains part to reveal an ever-shifting stage. Colors you've never seen dance with sounds you've never heard. Every sense becomes a performer, and you realize that what you call 'reality' is the grandest show of all.",
    icon: "🎭",
    gradient: "from-purple-900/40 via-fuchsia-900/30 to-pink-900/40",
    groundLayer: "Predictive processing: perception is a controlled hallucination",
    problems: ["This feels real, so it must be true", "Mistaking maps for territory"],
    insights: "Perception is interpretation, not truth.",
  },
  {
    id: "forge-of-thought",
    name: "The Forge of Thought",
    description: "Where language, concepts, and beliefs are hammered into form.",
    atmosphere: "Sparks fly from an eternal anvil as concepts take shape. Here, language and logic are molten metal, waiting to be forged into understanding. The heat of curiosity fuels the flames, and every question strikes like a hammer.",
    icon: "⚒️",
    gradient: "from-amber-900/40 via-orange-900/30 to-red-900/40",
    groundLayer: "CBT core: interpretations shape experience",
    problems: ["Rumination", "Inner critic", "Rigid beliefs"],
    insights: "Thoughts are constructions, not facts.",
  },
  {
    id: "field-of-emotion",
    name: "The Field of Emotion",
    description: "Emotions as signals — fast, low resolution, deeply embodied.",
    atmosphere: "Flowers bloom and wither with each breath. Joy rises like golden pollen, grief settles like morning dew. The weather changes with your heart, and you learn that every feeling is a season, beautiful in its passing.",
    icon: "🌸",
    gradient: "from-rose-900/40 via-pink-900/30 to-red-900/40",
    groundLayer: "Emotions as evolutionary, embodied processes",
    problems: ["Overwhelm", "Avoidance", "Fusion with feelings"],
    insights: "Emotions are information, not commands. Their power depends on how they are interpreted and acted upon.",
  },
  {
    id: "path-of-action",
    name: "The Path of Action",
    description: "Where behavior, reinforcement, and choice intersect.",
    atmosphere: "A thousand paths spread before you, each one lit by the lantern of a different choice. Footprints of past travelers glow softly in the mist. Every step you take writes your story in the dust of possibilities.",
    icon: "🛤️",
    gradient: "from-emerald-900/40 via-teal-900/30 to-cyan-900/40",
    groundLayer: "Exposure, habit loops, contrary action",
    problems: ["Stuckness", "Procrastination", "Anxiety loops"],
    insights: "Action changes the system more reliably than insight alone.",
  },
  {
    id: "mountain-of-meaning",
    name: "The Mountain of Meaning",
    description: "Values, direction, and the question: why move at all?",
    atmosphere: "You climb through clouds of uncertainty toward a peak that seems to recede as you approach. Yet with each step, the view expands. From here, you see that the journey itself was always the destination.",
    icon: "⛰️",
    gradient: "from-slate-900/40 via-zinc-900/30 to-stone-900/40",
    groundLayer: "Values and hierarchy of meaning",
    problems: ["Emptiness", "Confusion", "Misalignment"],
    insights: "Meaning is constructed through chosen direction.",
  },
];

export function getRealmById(id: string): Realm | undefined {
  return realms.find((realm) => realm.id === id);
}
