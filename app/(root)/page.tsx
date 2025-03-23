import StartupCard from "../../components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {

  const query = (await searchParams).query

  const post = [
    { 
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Yash"},
      _id: 1,
      description: "This is the description",
      image: "https://allthings.how/content/images/wordpress/2022/02/allthings.how-what-does-idk-mean-and-how-to-use-it-untitled-design.png",
      category: "Robots",
      title: "We Robots",
    },
]

  return (
    <>
      {/* Hero Section */}
      <section className="pink_container pattern">
        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub_heading !max-w-3xl text-white bg-[#122a4f]/ py-1 px-4">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query}/>
      </section>
      {/* Cards Section */}
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {post.length > 0 ? (
            post.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p>No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
