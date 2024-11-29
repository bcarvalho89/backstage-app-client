import { createTheme } from '@mantine/core';

export const theme = createTheme({
  defaultRadius: 'md',
  primaryColor: 'indigo',
  components: {
    Button: {
      defaultProps: {
        radius: 'sm',
      },
    },
    Paper: {
      defaultProps: {
        p: 'lg',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'sm',
      },
    },
    PasswordInput: {
      defaultProps: {
        radius: 'sm',
      },
    },
  },
});
