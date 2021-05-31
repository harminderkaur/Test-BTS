export const getInitials = (nameString)=>{
  if(!nameString) return null
  const fullName = nameString.split(' ');
  const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  return initials.toUpperCase();
}