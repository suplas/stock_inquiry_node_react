// 숫자 세자리 콤마
export function Comma(data: number) {
  if (data) {
    return data.toLocaleString("ko-KR");
  } else {
    return 0;
  }
}

// 날짜 변환
export function BasdConversion(basdd: string) {
  const year = parseInt(basdd.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1"), 10);
  const month = parseInt(basdd.replace(/^(\d{4})(\d{2})(\d{2})$/, "$2"), 10) - 1;
  const day = parseInt(basdd.replace(/^(\d{4})(\d{2})(\d{2})$/, "$3"), 10);

  const converteDate = new Date(year, month, day);
  const convertYear = converteDate.getFullYear();
  const convertMonth = converteDate.getMonth() + 1;
  const converteDay = converteDate.getDate();

  const result =
    convertYear +
    "." +
    (convertMonth < 10 ? "0" + convertMonth : convertMonth) +
    "." +
    converteDay;
  return result;
}

export function DigitConversion(data:number, digit:number){
    const digitConvert = Math.floor(data / digit);
    return Comma(digitConvert);
}
