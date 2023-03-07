export function numberWithCommas(x: any) {
  x = Math.floor(x);

  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function numberWithCommasAnd2dp(x: any) {
  return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const setInputWithComma = (e: any, setState: any) => {
  let stripped = e.replace(/,/g, "");

  setState(numberWithCommas(stripped));
};

export function parsePhoneNumber(n: any) {
  n = n.replace(/\s/g, "");

  if (n[0] !== "0") {
    n = n.replace("+", "");
    n = n.replace(/234/i, "0");
  }

  return n;
}
export function truncateString(str: any, num: any) {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str;
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + "...";
}

// import NetInfo from "@react-native-community/netinfo";

export function checkNetwork(navigation: any) {
  // const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
  //   const offline = !state.isConnected;
  //   if (offline) {
  //     navigation.navigate("no-network")
  //   }
  // });
  // removeNetInfoSubscription();
}

export function capitalizeSentence(sentence: any) {
  return sentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter: any) =>
    letter.toUpperCase()
  );
}
