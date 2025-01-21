import bcrypt from 'bcrypt';

const testPassword = 'contraseña123';

(async () => {
    const hashedPassword = await bcrypt.hash(testPassword, 10);
    console.log('Contraseña encriptada:', hashedPassword);

    const isMatch = await bcrypt.compare(testPassword, hashedPassword);
    console.log('¿Coinciden las contraseñas?:', isMatch);
})();
