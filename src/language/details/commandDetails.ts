import rawCommandDetails from './Command_Details.json';

export interface CommandDetailEntry {
    label: string;
    description: string;
    insert: string;
    kind: number;
}

export const commandDetails = rawCommandDetails as Record<string, CommandDetailEntry>;

export const commandTokenDefaults: Record<string, string> = Object.entries(commandDetails).reduce(
    (defaults, [key, detail]) => {
        defaults[key] = detail.insert;
        return defaults;
    },
    {} as Record<string, string>
);
