export const Practice3 = () => {
  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  return (
    <div>
      <p>練習問題3: 変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
