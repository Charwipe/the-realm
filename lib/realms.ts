export interface Realm {
  id: string;
  name: string;
  description: string;
  atmosphere: string;
  icon: string;
  gradient: string;
}

export const realms: Realm[] = [
  {
    id: "ocean-of-being",
    name: "The Ocean of Being",
    description: "A vast, infinite expanse where the boundaries of self dissolve into pure awareness.",
    atmosphere: "You stand at the shore of an endless sea. The waters glow with a soft bioluminescence, each wave a thought arising and passing. Here, you are both the observer and the observed, floating in the primordial depths of consciousness itself.",
    icon: "🌊",
    gradient: "from-cyan-900/40 via-blue-900/30 to-indigo-900/40",
  },
  {
    id: "theatre-of-perception",
    name: "The Theatre of Perception",
    description: "Where senses weave reality from threads of light, sound, and sensation.",
    atmosphere: "Velvet curtains part to reveal an ever-shifting stage. Colors you've never seen dance with sounds you've never heard. Every sense becomes a performer, and you realize that what you call 'reality' is the grandest show of all.",
    icon: "🎭",
    gradient: "from-purple-900/40 via-fuchsia-900/30 to-pink-900/40",
  },
  {
    id: "forge-of-thought",
    name: "The Forge of Thought",
    description: "The ancient workshop where ideas are hammered into form from raw possibility.",
    atmosphere: "Sparks fly from an eternal anvil as concepts take shape. Here, language and logic are molten metal, waiting to be forged into understanding. The heat of curiosity fuels the flames, and every question strikes like a hammer.",
    icon: "⚒️",
    gradient: "from-amber-900/40 via-orange-900/30 to-red-900/40",
  },
  {
    id: "field-of-emotion",
    name: "The Field of Emotion",
    description: "An ever-changing landscape painted by the heart's infinite palette.",
    atmosphere: "Flowers bloom and wither with each breath. Joy rises like golden pollen, grief settles like morning dew. The weather changes with your heart, and you learn that every feeling is a season, beautiful in its passing.",
    icon: "🌸",
    gradient: "from-rose-900/40 via-pink-900/30 to-red-900/40",
  },
  {
    id: "path-of-action",
    name: "The Path of Action",
    description: "The crossroads where intention becomes movement, and choice becomes destiny.",
    atmosphere: "A thousand paths spread before you, each one lit by the lantern of a different choice. Footprints of past travelers glow softly in the mist. Every step you take writes your story in the dust of possibilities.",
    icon: "🛤️",
    gradient: "from-emerald-900/40 via-teal-900/30 to-cyan-900/40",
  },
  {
    id: "mountain-of-meaning",
    name: "The Mountain of Meaning",
    description: "The summit where purpose crystallizes from the mists of existence.",
    atmosphere: "You climb through clouds of uncertainty toward a peak that seems to recede as you approach. Yet with each step, the view expands. From here, you see that the journey itself was always the destination.",
    icon: "⛰️",
    gradient: "from-slate-900/40 via-zinc-900/30 to-stone-900/40",
  },
];
