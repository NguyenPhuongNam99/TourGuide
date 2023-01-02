import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  account: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Tài khoản đang rỗng'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Mật khẩu đang rỗng'),
  email: Yup.string().email('Invalid email').required('Email đang rỗng'),
});

export const loginSchema = Yup.object().shape({
  account: Yup.string()
  .required('Tài khoản đang rỗng'),
  password:
    Yup.string()
    .required('Mật khẩu đang rỗng'),
});
