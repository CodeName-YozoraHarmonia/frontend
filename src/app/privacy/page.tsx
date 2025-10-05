import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const entity = 'Lorem ipsum'

const privacyPolicyIntro =
    'Esta Política de Privacidad está destinada a informar al Usuario sobre el modo en la que se da tratamiento a su Información Personal.'

const privacyPolicyScope =
    'se reserva el derecho de efectuar modificaciones a las presentes políticas a los efectos de dar mejor tratamiento a la Información Personal. Esta política no se aplica a los sitios a los que el Usuario pudiera acceder por medio de links, o cualquier otro tipo de vínculo. En caso de acceder a un sitio de un tercero por medio de un link publicado en el Website, el Usuario deberá revisar detenidamente las políticas de privacidad de dicho sitio.'

const privacyPollicies = [
    {
        title: 'Lorem ipsum dolor',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi, in quibusdam sunt, esse doloremque est fuga nulla dignissimos officiis dolores harum ab praesentium ut quam doloribus repudiandae reiciendis perferendis.',
    },
    {
        title: 'Lorem ipsum dolor',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi, in quibusdam sunt, esse doloremque est fuga nulla dignissimos officiis dolores harum ab praesentium ut quam doloribus repudiandae reiciendis perferendis.',
    },
    {
        title: 'Lorem ipsum dolor',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi, in quibusdam sunt, esse doloremque est fuga nulla dignissimos officiis dolores harum ab praesentium ut quam doloribus repudiandae reiciendis perferendis.',
    },
    {
        title: 'Lorem ipsum dolor',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi, in quibusdam sunt, esse doloremque est fuga nulla dignissimos officiis dolores harum ab praesentium ut quam doloribus repudiandae reiciendis perferendis.',
    },
    {
        title: 'Lorem ipsum dolor',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi, in quibusdam sunt, esse doloremque est fuga nulla dignissimos officiis dolores harum ab praesentium ut quam doloribus repudiandae reiciendis perferendis.',
    },
    {
        title: 'Lorem ipsum dolor',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi, in quibusdam sunt, esse doloremque est fuga nulla dignissimos officiis dolores harum ab praesentium ut quam doloribus repudiandae reiciendis perferendis.',
    },
]

export default function PrivacyPoliciesPage() {
    return (
        <Container component="main" className="min-h-svh w-full min-w-xs py-4">
            <Box width={{ md: '90%' }} mx="auto">
                <Box display="flex" flexDirection="column" gap={4} mb={4}>
                    <Typography component="h1" variant="h6" textAlign="center">
                        Políticas de privacidad
                    </Typography>
                    <Typography component="span" variant="body2">
                        {privacyPolicyIntro}
                    </Typography>
                    <Typography component="span" variant="body2">
                        {entity} {privacyPolicyScope}
                    </Typography>
                </Box>

                <Box
                    component="section"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                >
                    {privacyPollicies.map((policy, index) => (
                        <Box key={index} component="section">
                            <Typography
                                component="h2"
                                variant="subtitle1"
                                fontWeight="bold"
                                textTransform="uppercase"
                            >
                                {policy.title}
                            </Typography>
                            <Typography variant="body2">
                                {policy.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}
