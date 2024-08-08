// Interface principal para un Pokémon con nombre y URL
export interface Pokemon {
  name: string;
  url: URL;
}

// Resultado de una búsqueda de Pokémon con metadatos y resultados
export interface PokemonResults {
  count: number;
  next: string;
  previous?: string;
  results: Pokemon[];
}

// Datos detallados de un Pokémon específico
export interface PokemonData {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Species[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
}

// Habilidad de un Pokémon
export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: Species;
}

// Especie o entidad con nombre y URL
export interface Species {
  name: string;
  url: string;
}

// Índice de juego de un Pokémon
export interface GameIndex {
  game_index: number;
  version: Species;
}

// Detalle de un objeto que puede llevar un Pokémon
export interface HeldItem {
  item: Species;
  version_details: VersionDetail[];
}

// Detalle de una versión de un objeto
export interface VersionDetail {
  rarity: number;
  version: Species;
}

// Movimiento de un Pokémon
export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

// Detalle de una versión de grupo de un movimiento
export interface VersionGroupDetail {
  level_learned_at: number;
  version_group: Species;
  move_learn_method: Species;
}

// Tipos pasados de un Pokémon
export interface PastType {
  generation: Species;
  types: Type[];
}

// Tipo de un Pokémon
export interface Type {
  slot: number;
  type: Species;
}

// Generaciones de Pokémon
export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': { [key: string]: Home };
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

// Otras imágenes de sprites
export interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
  showdown: Sprites;
}

// Sprites de un Pokémon
export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

// Detalles de generación de Pokémon
export interface GenerationI {
  'red-blue': RedBlue;
  yellow: RedBlue;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Crystal;
  silver: Crystal;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIii {
  emerald: OfficialArtwork;
  'firered-leafgreen': Crystal;
  'ruby-sapphire': Crystal;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface GenerationIv {
  'diamond-pearl': Sprites;
  'heartgold-soulsilver': Sprites;
  platinum: Sprites;
}

export interface GenerationV {
  'black-white': Sprites;
}

export interface GenerationVii {
  icons: DreamWorld;
  'ultra-sun-ultra-moon': Home;
}

export interface DreamWorld {
  front_default: string;
  front_female: null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

// Estadísticas de un Pokémon
export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

// Datos de una especie de Pokémon
export interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: Color[];
  evolution_chain: EvolutionChain;
  evolves_from_species: null;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: Color;
  growth_rate: Color;
  habitat: Color;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: Color;
  varieties: Variety[];
}

// Color de un Pokémon
export interface Color {
  name: string;
  url: string;
}

// Cadena de evolución de un Pokémon
export interface EvolutionChain {
  url: string;
}

// Entrada de texto descriptivo de un Pokémon
export interface FlavorTextEntry {
  flavor_text: string;
  language: Color;
  version: Color;
}

// Género de un Pokémon
export interface Genus {
  genus: string;
  language: Color;
}

// Nombre de un Pokémon en diferentes idiomas
export interface Name {
  language: Color;
  name: string;
}

// Encuentros en el parque Pal
export interface PalParkEncounter {
  area: Color;
  base_score: number;
  rate: number;
}

// Número de Pokédex de un Pokémon
export interface PokedexNumber {
  entry_number: number;
  pokedex: Color;
}

// Variedad de un Pokémon
export interface Variety {
  is_default: boolean;
  pokemon: Color;
}
