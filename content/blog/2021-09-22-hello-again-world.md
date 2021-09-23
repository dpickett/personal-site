---
path: "/hello-again-world"
date: "2021-09-23T02:29:17.370Z"
title: "Hello Again, World - A Brief History of Blogging"
---

Well, I've hit the old respawn button on getting into the blog routine. I was inspired by [Show Your Work](https://www.amazon.com/Show-Your-Work-Austin-Kleon/dp/076117897X/) to start sharing a little more openly about what we're working on at [Launch Academy](https://launchacademy.com) as well as what I'm thinking about as an entrepreneur and technologist. I want to share some experiences to benefit future developers and tech founders.

So...it's time to start writing again, but where exactly should a technologist write?

## Why It's Easy to Fall of the Blog Wagon

Man...content management systems. I've gone from [wordpress](https://wordpress.org/) to static websites, to home grown systems built on [Ruby on Rails](https://rubyonrails.org), and ultimately back to WordPress!

When it comes to publishing, it's hard enough to create meaningful content. **Friction** in the process is what destroys momentum. So, what's the best way for a developer to publish content? Let's take a brief trip through memory lane to arrive at our current destination.

### Wordpress

So, I was a college student at [WPI](https://wpi.edu) with a small and growing IT Firm. At the time, there weren't fancy frameworks like [Ruby on Rails](https://rubyonrails.org) and [Django](https://www.djangoproject.com/). I had just learned PHP in my webware class, and so, Wordpress just made sense. For context, wordpress currently runs [42.6% of all websites](https://w3techs.com/technologies/details/cm-wordpress), according to W3Techs.com.

In a nutshell, PHP and Wordpress provided you with friendly, web-based tools to publish content. At the time, there were really cheap hosting providers that made it easy with tools like [CPanel](https://cpanel.net/) to get an instance of wordpress up and running. so, that's where it all began.

### The Downfall of Wordpress

Think of Wordpress like Windows. Because it has such a strong market position, it's a ripe target for hackers. I think I had an instance on [DreamHost](https://www.dreamhost.com/), and I kept getting emails about vulnerabilities and attacks on my site. From bots to spam, managing a wordpress instance became super annoying.

### Static Website: the Overcorrection

I got so fed up with fighting PHP and Wordpress vulnerabilities, and I was eager to flex my newly minted HTML5 and CSS skills. Oh, the young, technical and naive. So I said, "you know what, forget this dynamic craziness. I know HTML and CSS, I'll just manually maintain my site."

Bad. Idea. I spent more time massaging the #$!@#$!@# HTML and CSS than anything else. It distracted from the whole idea of, you know, publishing content to help people.

### Mostly Jekyll, a Little Hyde

By now, I had left a startup and ventured back out on my own. It was time to build a company website. We had really developed a name for ourselves building [Ruby on Rails](https://rubyonrails.org/) software, so Ruby felt like the natural place to start when thinking about the technology we wanted to use. Static site generators were just starting to be a thing, so [OctoPress](http://octopress.org/) emerged as our frontrunner.

Publishing with Octopress was a snap. Why? Because of this little technology called Markdown, which I'll talk about a little later. The site [Launchware.com](http://launchware.com) is still up (at the time of publishing this post) (also, sorry it doesn't have an SSL cert on it), operational, and snappy after all of these years because *static sites work without significant overhead*.

For our consultancy, Octopress really fit the bill in terms of being able to publish content quickly among a team of developers.

### The Slow Roll Your Own

Fast forward to now starting [Launch Academy](https://launchacademy.com) and there was a need to have both technical _and_ nontechnical staff update the website with important content. Gasp! We'd have to teach those folks Markdown. Quick! Bust out [CKEditor](https://ckeditor.com/) or [TinyMCE](https://www.tiny.cloud/). Being a team of developers, I reluctantly acquiesced to our Director of Engineering to have the team build out a custom CMS for our site for a number of reasons. "Sure" I thought, "this will be a great problem for some of our new engineers to solve." This was a huge mistake. At the time, Launch Academy, first and foremost, taught people to code. So, paradoxically, we didn't have much time to code our own software. We had the best of intentions but this approach did not achieve the intended objective of allowing both technical and nontechnical staff to easily update the website.

### Wordpress: the Return

It got kind of lame having to wait for features to be built out in our home-grown Content Management System for our business users to publish content. So, in 2017, we migrated to Wordpress. This fit the bill for a while. Wordpress, particularly when hosted on [WPEngine](https://wpengine.com/) had really come a long way. We were able to easily publish content, and performance was within reasonable expectations. No friction, so we were able to publish content easily.

But...what happened when we wanted to update the look and feel of our site, or when we wanted to add a new "dynamic" part of the site. Wordpress fell down, and was absolutely painful to modify when it came to themes and their internal API.

## The Promise of the JAMStack

Paradoxically, we never used Wordpress or any kind of nontechnical user-friendly content management in our course ware. At Launch, we built our learning management system from the ground up, and we use Markdown to publish all of our content. We wrote custom software to read in a bunch of markdown and YML files to publish the curriculum for students to consume. So, why couldn't we use a similar scheme with our public-facing website?

When we were considering our latest redesign (currently underway at the time of writing this article), the [JamStack](https://jamstack.org/) was becoming a thing, and we had done a bit of work with Headless Content Management systems like [Strapi](https://strapi.io/). Fast load time is really important to a publicly facing website, so static site generation seemed like a really great way to go. So, for the company, we're rolling out a [Gatsby](https://gatsbyjs.com) website backed by Strapi. It truly gives us the best of both worlds - a static website that can be built off of developer-friendly tools like Markdown and ReactJS with the ability for nontechnical folks to update content via a Content Management System. We live in the future.

### About This Site

So, here we are, back at humble danpickett.com. If it's just me, a software developer, I don't need a fancy headless Content Management System like Strapi. So, I have come home to Markdown. It eases friction and it's easier to publish content than ever before. This site is currently built on [Gatsby](https://www.gatsbyjs.com/) and [AWS Amplify](https://aws.amazon.com/amplify/). I can push an article to [GitHub](https://github.com/) and the cloud does the rest. Beautiful. Simple. Without friction.
