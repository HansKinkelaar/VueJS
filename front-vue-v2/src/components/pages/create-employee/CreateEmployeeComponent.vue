<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employee</h3>
      </div>
      <div class="card-body m-3">
        <form @submit.prevent="CreateNewEmployee">

          <!-- INÍCIO BLOCO: Employee Name -->
          <div class="mb-3">
            <label class="font-weight-bold">Employee Name</label>
            <input 
              type="text" 
              placeholder="Type Your Name" 
              class="form-control" 
              v-model="employee.name">
          </div>
          <!-- FIM BLOCO: Employee Name -->

          <!-- INÍCIO BLOCO: Job Role -->
          <div class="mb-3">
            <label class="font-weight-bold">Job Role</label>
            <input 
              type="text"
             placeholder="Type Your Job" 
             class="form-control" 
             v-model="employee.job_role">
          </div>
          <!-- FIM BLOCO: Job Role -->

          <!-- INÍCIO BLOCO: Salary -->
          <div class="mb-3 form-group">
            <label class="font-weight-bold">Type Your Salary</label>
            <input 
              type="number" 
              placeholder="Type Your Salary" 
              class="form-control"
              v-model="employee.salary">
           </div>
          <!-- FIM BLOCO: Salary -->

          <!-- INÍCIO BLOCO: Birth -->
          <div class="mb-3">
            <label class="font-weight-bold">Birth</label>
            <input 
              type="date" 
              placeholder="YYYY/MM/DD" 
              class="form-control" 
              v-model="employee.birth">
          </div>
          <!-- FIM BLOCO: Birth -->

          <!-- INÍCIO BLOCO: Employee Registration -->
          <div class="mb-3">
            <label class="font-weight-bold">Employee Registration</label>
            <input 
              type="text" 
              placeholder="Employee Registration" 
              class="form-control" 
              v-model="employee.employee_registration">
          </div>
            <!-- FIM BLOCO: Employee Registration -->
          <div class="mb-3">
            <button class="btn btn-primary" type="submit">+ Employee</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    name: 'CreateEmployeeComponent',
  },
  data() {
    return {
      employee: {
        name: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: '',
      },
    };
  },
  methods: {
    handleSubmitForm() {

    },
  },
};
</script>
