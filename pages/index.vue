<template>
  <div>
    <section id="home" class="hero is-info is-fullheight" v-in-viewport.once>
      <!-- Hero header: will stick at the top -->
      <div class="hero-head animated fadeIn inview1 delay-2" v-headroom>
        <nav class="navbar">
          <div class="navbar-brand">
            <a class="navbar-item" href="http://bulma.io">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>

            <button class="button navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          
          <scrollactive class="navbar-menu">
            <div class="navbar-end">
              <a href="#home" class="scrollactive-item nav-item is-active">
                Home
              </a>
              <a href="#examples" class="scrollactive-item nav-item">
                Examples
              </a>
              <a href="#documentation" class="scrollactive-item nav-item">
                Documentation
              </a>
              <span class="nav-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="mdi mdi-home"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </scrollactive>

        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1 animated fadeInDown inview3 delay-1-2">
            Title
          </h1>
          <h2 class="subtitle animated fadeInUp inview3 delay-1-4">
            Subtitle
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot animated bounceInUp inview1 delay-3">
        <nav class="tabs">
          <div class="container">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <section id="examples" class="hero is-light is-fullheight" v-in-viewport.once>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1 animated inview3 flipInX delay-0-5">
            Examples
          </h1>
        </div>
      </div>
    </section>

    <section id="documentation" class="hero is-success is-medium" v-in-viewport.once>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1 animated inview3 tada delay-0-5">
            Documentation
          </h1>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by
            <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/jgthms/bulma">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
}
</script>

<style>
.headroom {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1;
  transition: transform 0.4s ease;
}

.headroom.headroom--pinned {
  transform: translateY(0);
}

.headroom.headroom--unpinned {
  transform: translateY(-100%);
}

nav.navbar {
  transition: background-color 0.4s ease;
  background-color: rgba(0, 0, 0, 0.2);
}

.headroom.headroom--unpinned>nav.navbar,
.headroom.headroom--top>nav.navbar {
  background-color: transparent;
}
.headroom.headroom--pinned.headroom--not-top>nav.navbar {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
