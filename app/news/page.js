import Link from "next/link";

export default function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href={"/"}>Home Page</Link>
                </li>
                <li>
                    <Link href={"/news/first-news"}>First News</Link>
                </li>
            </ul>
        </>
    );
}