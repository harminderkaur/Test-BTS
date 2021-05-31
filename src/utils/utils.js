export const getInitials = nameString => {
  if (!nameString) return null;
  const fullName = nameString.split(' ');
  let initials = '';
  if (fullName.length > 1) {
    initials = fullName?.shift()?.charAt(0) + fullName.pop()?.charAt(0);
  } else {
    initials = fullName?.shift()?.charAt(0);
  }

  return initials.toUpperCase();
};
