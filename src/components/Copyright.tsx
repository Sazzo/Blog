import WaterMark from "../assets/felipesazz.svg";
export default function Copyright() {
  return (
    <>
      <p>Felipe Garcia &copy; 2020 | Built with Next.js and Love ❤</p>
      <a href="https://twitter.com/FelipeSazz" className={"watermark"}>
        <WaterMark
          width={54}
          height={54}
          fill={"#ffffff"}
          className={"watermark"}
        />
      </a>
      <style jsx>
        {`
          p {
            font-size: 0.75rem;
            text-align: center;
          }
          .watermark {
            margin-top: 1rem;
          }
        `}
      </style>
    </>
  );
}
