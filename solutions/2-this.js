// BEGIN
export default function make(numerator = 0, denominator = 1) {
    let num = numerator;
    let denom = denominator;

    return {
      setNumer: (newnum) => {
        num = newnum;
      },
      setDenom: (newdenom) => {
        denom = newdenom;
      },
      getNumer: () => num,
      getDenom: () => denom,
      toString: () => `${num}/${denom}`,
      add: (other) => {
        const newnum = num * other.getDenom() + denom * other.getNumer();
        const newdenom = denom * other.getDenom();
        return make(newnum, newdenom);
      }
    };
  }
// END