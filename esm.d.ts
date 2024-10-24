type Args = { 
    id?: string,
    class?: string,
    style?: string,
    href?: string,
    src?: string,
    onclick?: string,
    onchange?: string,
    type?: string,
    name?: string,
    alt?: string,
    rel?: string,
    as?: string,
    [key: string]: string
};

export type fragment = () => string;
export type html = (args?:Args|string) => string;
export type head = (args?:Args|string) => string;
export type body = (args?:Args|string) => string;