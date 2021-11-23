

// eslint-disable-next-line @typescript-eslint/no-var-requires
const generator = require('generate-password');

type generatorType = {
    length: number,
    numbers: boolean,
    uppercase: boolean
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export const randomStringGenerator = generator.generate({
    length: 10,
    numbers: true,
    uppercase: false
})
