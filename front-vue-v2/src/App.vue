<template>
  <div>
    <!--INÍCIO NAVBAR-->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Create New Employee</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/list-employees">List All Employees</router-link>
            </li>
          </ul>
          <a class="navbar-brand order-md-last">CRUD Vue.js + PostgreSQL + Node.js + Azure</a>

        </div>
      </div>
    </nav>
    <!--FIM NAVBAR-->

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
