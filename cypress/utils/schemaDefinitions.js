export const definitionHelper = {
    $id: 'customDefinitions',
    definitions: {
        timeStamp: {
            type: 'string',
            examples: ['2021-05-28T19:14:52'],
            pattern: '^(\\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01]))T((2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])$)'
        }
    }
}