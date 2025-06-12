import { Config } from 'tailwindcss';

interface Options {
    /** default: true e.g. does not include default normalize styles */
    disablePreflight?: boolean;
}
declare function orbitTailwindPreset(options?: Options): Config;

export { orbitTailwindPreset as default };
