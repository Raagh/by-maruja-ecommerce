import mercadopago from 'mercadopago';

export default function configure() {
  mercadopago.configure({
    sandbox: true,
    access_token: 'TEST-7136722070390133-050117-a2efac96031b2994b4f6a2da97e77383-478787616',
  });
}
