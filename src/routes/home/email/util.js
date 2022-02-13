export const getEmailBody = (state) => {
  const { name, email, mobile, query } = state;

  return `
    Message
    ------------
    ${query}

    ------------ From ------------
    Name: ${name}
    Email: ${email}
    Mobile: ${mobile};
  `;
};
