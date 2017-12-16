export const NAME_CHANGED = 'name_changed';


export const nameChanged = (nameType, name) => ({
  type: NAME_CHANGED,
  nameType,
  name
});
