import * as Faker from 'faker';

const INFINITE_FLAG = 0;

export function* loremIpsumGenerator(
    type: 'word' | 'sentence' | 'paragraph',
    count = INFINITE_FLAG,
): Generator<string> {
    for (let i = 0; i < count || count === INFINITE_FLAG; i++) {
        yield {
            word: Faker.lorem.words(1),
            sentence: Faker.lorem.sentences(1),
            paragraph: Faker.lorem.paragraphs(1),
        }[type];
    }
}

export function generateLoremIpsum(
    type: 'word' | 'sentence' | 'paragraph',
    count = INFINITE_FLAG,
): string[] {
    return Array.from(loremIpsumGenerator(type, count));
}

export function* sourceListGenerator<T = string>(
    sources: T[],
    count = INFINITE_FLAG,
): Generator<T> {
    const initIndex = Math.floor(Math.random() * sources.length);
    for (
        let i = 0, currentSourceIndex = initIndex;
        i < count || count === INFINITE_FLAG;
        i++, currentSourceIndex++
    ) {
        if (currentSourceIndex >= sources.length) {
            currentSourceIndex = 0;
        }
        yield sources[currentSourceIndex];
    }
}

export function generateSource(sources: string[]): string {
    return sourceListGenerator(sources).next().value as string;
}

export function generateSourceList(
    sources: string[],
    count = INFINITE_FLAG,
): string[] {
    return Array.from(sourceListGenerator(sources, count));
}
