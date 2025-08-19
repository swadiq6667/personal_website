import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      slug: "chairman-experience",
      title: "Chairman – Parmmekkavu College Union “Euonia” (2022-2023)",
      excerpt:
        "Elected as Chairman of the Parmmekkavu College Union Euonia in 2022-2023 after leading a successful campaign against two other contenders. Organized and led 7 major programs during my tenure, fostering student engagement and campus development.",
      image: "/Gemini_Generated_Image_5l36no5l36no5l36.png",
      date: "2025-08-15",
      readTime: "8 min read",
      tags: ["Leadership", "Organizing", "Teamwork"],
      featured: true,
    },
    {
      slug: "ncc",
      title: "NCC-National Cadet Corps",
      excerpt:
        "Served in the NCC while studying in 10th class and actively participated in the Republic Day program at Thrissur Maidan. This experience instilled discipline, patience, and commitment to healthy habits like early rising, hard training, and mindful eating.",
      image: "/Gemini_Generated_Image_v9v8uqv9v8uqv9v8.png",
      date: "2021-01-26",
      readTime: "5 min read",
      tags: ["Discipline", "Training", "NCC"],
      featured: false, // Changed to false to prevent it from being featured
    },
    {
      slug: "cricket",
      title: "Cricket - District & D-Zone Level",
      excerpt:
        "Played cricket during 10th standard, representing the Thrissur District team at the district level. Later, continued passion for the game by playing at the D-Zone level in college, showcasing teamwork, resilience, and competitive spirit.",
      image: "/swadiq99player.jpeg",
      date: "2022-12-15",
      readTime: "6 min read",
      tags: ["Cricket", "Teamwork", "Sportsmanship"],
      featured: false, // Changed to false to prevent it from being featured
    },
  ];

  // Find the single featured post
  const featuredPost = blogPosts.find(post => post.featured);
  // Filter to get all non-featured posts
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Beyond the Code: My Extracurricular Journey
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Whether fixing a tricky code bug or scoring on the field, I thrive
            on challenges that push me to perform my best.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="bg-slate-800 border-slate-700 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Featured</Badge>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-600/20 text-blue-400 border-blue-600/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link to={`/blog/${featuredPost.slug}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {post.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-blue-600/20 text-blue-400 border-blue-600/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
