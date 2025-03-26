import StartupCard, { StartupTypeCard } from "../../components/StartupCard";
import SearchForm from "../../components/SearchForm";
// import { client } from "../../sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {

  const query = (await searchParams).query
  const params = {search: query || null}

  const session = await auth()
  // console.log(session?.id)

  // const posts = await client.fetch(STARTUPS_QUERY)
  // console.log(JSON.stringify(posts, null, 2));
  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params})

  return (
    <>
      {/* Hero Section */}
      <section className="blue_container pattern">
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
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p>No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
