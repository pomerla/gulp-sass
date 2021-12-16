
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'jsx',
  lastName: 'format'
};


const element = (
  <strong>
    Hi, {formatName(user)}!
  </strong>
);


ReactDOM.render(
  element,
  document.getElementById('output')
);