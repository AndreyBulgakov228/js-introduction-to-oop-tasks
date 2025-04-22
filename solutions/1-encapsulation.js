// BEGIN
const getMutualFriends = (user1, user2) => {
  const friends1 = user1.getFriends();
  const friends2 = user2.getFriends();

  const friendsSet1 = new Set(friends1.map(friend => friend.id));

  const mutualFriends = friends2.filter(friend => friendsSet1.has(friend.id));

  return mutualFriends;
}

export { getMutualFriends };
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});