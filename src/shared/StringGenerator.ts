import generator from 'generate-password';
export const randomStringGenerator: string = generator.generate({
    length: 10,
    numbers: true,
    uppercase: false
})
