<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Employee</h3>
      </div>
      <div class="card-body m-3">
        <form @submit.prevent="handleSubmitForm">

          <!-- INÍCIO BLOCO: Employee Name -->
          <div class="mb-2">
            <label class="font-weight-bold">Employee Name</label>
            <input 
              type="text"
              id="name"
              name="name"
              placeholder="Type Your Name" 
              class="form-control" 
              v-model="employeeForm.name"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.name.$error}"
              />
            <div v-if="isSubmitted && !$v.employeeForm.name.required" 
            class="invalid-feedback"> 'Employee name' field is required!
            </div>
          </div>

          <!-- FIM BLOCO: Employee Name -->

          <!-- INÍCIO BLOCO: Job Role -->
          <div class="mb-2">
            <label class="font-weight-bold">Job Role</label>
            <input 
              type="text"
              id="job_role"
              name="job_role"
             placeholder="Type Your Job" 
             class="form-control" 
             v-model="employeeForm.job_role"
             :class="{
                'is-invalid': isSubmitted && $v.employeeForm.job_role.$error}"
             >
            <div v-if="isSubmitted && !$v.employeeForm.job_role.required" 
            class="invalid-feedback"> 'Job Role field' is required!
            </div>
          </div>
          <!-- FIM BLOCO: Job Role -->

          <!-- INÍCIO BLOCO: Salary -->
          <div class="mb-2">
            <label class="font-weight-bold">Type Your Salary</label>
            <input 
              type="number" 
              id="salary"
              name="salary"
              placeholder="Type Your Salary" 
              class="form-control"
              v-model="employeeForm.salary"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.salary.$error}"
             >
            <div v-if="isSubmitted && !$v.employeeForm.salary.required" 
            class="invalid-feedback"> 'Salary' field is required!
            </div>
           </div>
          <!-- FIM BLOCO: Salary -->

          <!-- INÍCIO BLOCO: Birth -->
          <div class="mb-2">
            <label class="font-weight-bold">Birth</label>
            <input 
              type="date" 
              id="birth"
              name="birth"
              placeholder="YYYY/MM/DD" 
              class="form-control" 
              v-model="employeeForm.birth"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.birth.$error}"
             >
            <div v-if="isSubmitted && !$v.employeeForm.birth.required" 
            class="invalid-feedback"> 'Birth' field  is required!
            </div>
          </div>
          <!-- FIM BLOCO: Birth -->

          <!-- INÍCIO BLOCO: Employee Registration -->
          <div class="mb-2">
            <label class="font-weight-bold">Employee Registration</label>
            <input 
              type="text" 
              id="employee_registration"
              name="employee_registration"
              placeholder="Employee Registration" 
              class="form-control" 
              v-model="employeeForm.employee_registration"
              :class="{
                'is-invalid': isSubmitted && $v.employeeForm.employee_registration.$error}"
             >
            <div v-if="isSubmitted && !$v.employeeForm.employee_registration.required" 
            class="invalid-feedback"> 'Employee Registration' field is required!
            </div>
          </div>
            <!-- FIM BLOCO: Employee Registration -->
          <div class="mb-2">
            <button class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-plus']"/> Employee 
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators';

export default { 
  name: 'CreateEmployeeComponent',
  data() {
    return {
      employeeForm: {
        name: '',
        job_role: '',
        salary: '',
        birth: '',
        employee_registration: '',
      },
      isSubmitted: false,
    };
  },
  validations: {
    employeeForm: {
      name: { required },
      job_role: { required },
      salary: { required },
      birth: { required },
      employee_registration: { required },
    },
  },
  methods: {
    handleSubmitForm() {
      this.isSubmitted = true;

      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }
    },
  },
};
</script>
