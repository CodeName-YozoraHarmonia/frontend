import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const titularity =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi, in quibusdam sunt, esse doloremque est fuga nulla dignissimos officiis dolores harum ab praesentium ut quam doloribus repudiandae reiciendis perferendis.'

const applicability =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, quasi, in quibusdam sunt, esse doloremque est fuga nulla dignissimos officiis dolores harum ab praesentium ut quam doloribus repudiandae reiciendis perferendis.'

const termsAndConditions = [
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

export default function TermsConditionsPage() {
    return (
        <Container component="main" className="min-h-svh w-full min-w-xs py-4">
            <Box width={{ md: '90%' }} mx="auto">
                <Box display="flex" flexDirection="column" gap={4} mb={4}>
                    <Typography component="h1" variant="h6" textAlign="center">
                        Terminos y Condiciones
                    </Typography>
                    <Typography component="span" variant="body2">
                        {titularity}
                    </Typography>
                    <Typography component="span" variant="body2">
                        {applicability}
                    </Typography>
                </Box>

                <Box
                    component="section"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                >
                    {termsAndConditions.map((term, index) => (
                        <Box key={index} component="section">
                            <Typography
                                component="h2"
                                variant="subtitle1"
                                fontWeight="bold"
                                className="uppercase"
                            >
                                {index + 1} - {term.title}
                            </Typography>
                            <Typography variant="body2">
                                {term.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}
