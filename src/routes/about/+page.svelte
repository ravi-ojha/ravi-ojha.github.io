<script lang="ts">
  import PageHead from '$lib/components/seo/page-head.svelte'
  import Navbar from '$lib/components/navbar.svelte'
  import Footer from '$lib/components/footer.svelte'
</script>

<PageHead title="About" description="About Ravi Ojha - Full-stack Software Engineer, product person, and blogger at Rookie's Lab" />

<main>
  <Navbar />
  <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-first-fold">
    <article class="prose">
      <blockquote>
        <p>
          "Writing doesn't just communicate ideas; it generates them. If you're bad at writing and don't like to do it, you'll miss out on most of the ideas writing would have generated." -Paul Graham
        </p>
      </blockquote>

      <div class="about-intro">
        <img
          src="/posts/me_itachi.jpg"
          alt="Ravi Ojha"
          class="profile-image"
        />
        <h2>Who am I?</h2>
        <p>
          I'm Ravi Ojha, responsible for just about everything on this site. That's me, over to the right. I'm a full-stack Software Engineer by passion. A product person. On lazy weekends, I either indulge into graphic design or write blog posts here. I'm also into competitive programming, which helps to keep up with algorithmic challenges and logical skills.
        </p>
        <p>
          I started Rookie's Lab in 2012 as a freshman in college to rant about extra-curricular activities. It also serves as an excuse to practice the art of writing. I started with graphic designs. Then I became a competitive programming fanatic. Later, I got introduced to Python in an online course offered by MIT. After graduation, I started writing about software engineering because that's what I ended up doing for a living. As to the part of practicing the art of writing, it's been a mild success so far, however, I shy away in embarrassment when I read my earlier posts. Maybe, that's a measure of progress. And, from the quote above, I believe writing will help me generate more ideas, other than communicating with the audience.
        </p>
      </div>

      <h2>Life penned down</h2>
      <ul>
        <li><a href="/posts/ravi-ojha-computer-science-svnit-surat-life-post">Four years of graduation</a></li>
        <li><a href="/posts/hobbyist-competitive-programmer-to-software-engineer-at-hackerearth">Starting career as a Software Engineer</a></li>
        <li><a href="/posts/what-it-takes-to-develop-test-and-release-a-software-product">A quarter year of a Software Engineer's life at a startup</a></li>
      </ul>

      <h2>Around the Internet</h2>
      <ul class="links-list">
        <li>
          <span class="link-category">Competitive Programming:</span>
          <a href="http://www.codechef.com/users/raviojha2105" target="_blank" rel="noopener">CodeChef</a><span class="dot"> · </span>
          <a href="https://www.hackerearth.com/users/akatsuki/" target="_blank" rel="noopener">HackerEarth</a><span class="dot"> · </span>
          <a href="http://codeforces.com/profile/raviojha2105" target="_blank" rel="noopener">CodeForces</a>
        </li>
        <li>
          <span class="link-category">Design:</span>
          <a href="http://studio.topcoder.com/?module=ViewMemberProfile&ha=raviojha2105" target="_blank" rel="noopener">TopCoder Studio</a>
        </li>
        <li>
          <span class="link-category">Development:</span>
          <a href="https://github.com/ravi-ojha" target="_blank" rel="noopener">Github</a>
        </li>
        <li>
          <span class="link-category">Everything else:</span>
          <a href="https://www.linkedin.com/in/raviojha" target="_blank" rel="noopener">LinkedIn</a><span class="dot"> · </span>
          <a href="https://twitter.com/ivarojha" target="_blank" rel="noopener">Twitter</a><span class="dot"> · </span>
          <a href="https://www.quora.com/profile/Ravi-Ojha" target="_blank" rel="noopener">Quora</a><span class="dot"> · </span>
          <a href="https://www.fb.com/ivarojha" target="_blank" rel="noopener">Facebook</a>
        </li>
      </ul>

      <h2>My posts on other websites</h2>
      <ul>
        <li><a href="https://www.hackerearth.com/getstarted-competitive-programming/" target="_blank" rel="noopener">The Complete Reference to Competitive Programming</a></li>
        <li><a href="http://blog.hackerearth.com/2015/05/top-7-algorithms-and-data-structures-every-programmer-should-know-about.html" target="_blank" rel="noopener">Top 7 algorithms and data structures every programmer should know about</a></li>
        <li><a href="http://engineering.hackerearth.com/2017/03/07/leveraging-reactjs-in-hackerearth-assessment-environment/" target="_blank" rel="noopener">Leveraging ReactJS in HackerEarth Assessment Environment</a></li>
        <li><a href="http://blog.hackerearth.com/how-to-apply-for-software-engineering-internships-at-startups" target="_blank" rel="noopener">How to apply for Software Engineering Internships at startups?</a></li>
      </ul>

      <h2>"Rookie's Lab"?</h2>
      <p>
        I used to watch Dexter's Lab (I still do sometimes) and wanted to name <em>"&lt;something&gt; lab"</em>. Back in 2012, I was a privacy freak and didn't like the idea of disclosing the man behind the blog. So using my name was not an option. Now, I was just a new kid in the world of blogging, a novice. Looked up "novice" on <a href="http://www.thesaurus.com/" target="_blank" rel="noopener">thesaurus</a> for other words and hence "Rookie's Lab".
      </p>
    </article>
  </div>
  <Footer />
</main>

<style>
  .about-intro {
    position: relative;
  }

  .profile-image {
    float: right;
    width: 140px;
    height: auto;
    margin: 0 0 1rem 1.5rem;
    border-radius: 8px;
    shape-outside: margin-box;
  }

  @media (max-width: 480px) {
    .profile-image {
      float: none;
      display: block;
      margin: 0 auto 1.5rem auto;
      width: 160px;
    }
  }

  .links-list {
    list-style: none;
    padding-left: 0;
  }

  .links-list li {
    margin-bottom: 0.75em;
  }

  .link-category {
    font-weight: 500;
    margin-right: 0.5em;
  }

  .dot {
    color: var(--color-arctic-400);
  }

  :global(.dark) .dot {
    color: var(--color-arctic-600);
  }
</style>
