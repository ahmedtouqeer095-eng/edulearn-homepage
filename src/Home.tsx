function Home() {
  const courses = [
    {
      title: "Web Development",
      category: "Programming",
      description: "Learn HTML, CSS, JavaScript and React.",
      icon: "💻",
      level: "Beginner",
    },
    {
      title: "Artificial Intelligence",
      category: "Technology",
      description: "Explore AI, Machine Learning and its applications.",
      icon: "🤖",
      level: "Intermediate",
    },
    {
      title: "Graphic Designing",
      category: "Design",
      description: "Learn creative design and visual communication.",
      icon: "🎨",
      level: "Beginner",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-tag">WELCOME TO EDULEARN</span>

          <h1>
            Learn New Skills.
            <br />
            <span>Build Your Future.</span>
          </h1>

          <p>
            Discover new opportunities with online courses.
            Learn from anywhere and take your knowledge to
            the next level.
          </p>

          <a href="#courses" className="explore-btn">
            Explore Courses →
          </a>

          <div className="hero-stats">
            <div>
              <h2>50+</h2>
              <p>Online Courses</p>
            </div>

            <div>
              <h2>20+</h2>
              <p>Expert Mentors</p>
            </div>

            <div>
              <h2>1000+</h2>
              <p>Happy Learners</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="learning-card">
            <div className="book-icon">📚</div>
            <h2>Start Learning</h2>
            <p>Your journey to success starts here!</p>
            <div className="progress">
              <div></div>
            </div>
            <small>Keep Growing Every Day</small>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Explore Categories</h2>
        <p>Choose your favourite learning field.</p>

        <div className="category-grid">
          <div className="category-card">💻 Programming</div>
          <div className="category-card">🎨 Designing</div>
          <div className="category-card">🤖 Artificial Intelligence</div>
          <div className="category-card">📊 Business</div>
        </div>
      </section>

      {/* Courses */}
      <section className="courses" id="courses">
        <div className="section-heading">
          <div>
            <h2>Popular Courses</h2>
            <p>Start learning something new today.</p>
          </div>
          <a href="#courses">View All →</a>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.title}>
              <div className="course-icon">{course.icon}</div>

              <span className="course-category">
                {course.category}
              </span>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="course-bottom">
                <span>{course.level}</span>
                <button>Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <h2>Why Choose EduLearn?</h2>
        <p>
          We make learning simple, accessible and enjoyable
          for everyone.
        </p>

        <div className="about-grid">
          <div>
            <h3>🎓 Quality Education</h3>
            <p>Learn useful skills through structured courses.</p>
          </div>

          <div>
            <h3>🌍 Learn Anywhere</h3>
            <p>Access your learning journey from anywhere.</p>
          </div>

          <div>
            <h3>🚀 Grow Your Skills</h3>
            <p>Build knowledge and prepare for your future.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;