/**
 *  file: src/services/EmployeeService.js
 *  data: 01/08/2022
 *  description: file responsible for APIs request methods via HTTP
 */

import Api from './Api';

export default {

  /**
  * Método responsável por criar um novo 'Employee'
  * (POST): localhost:3000/api/employees/:id
  */ 
  async createNewEmployee(employee) {
    try {
      const response = await Api().post('/employees', employee);  
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
  * Método responsável por listar todos os 'employees'
   * (GET): localhost:3000/api/employees
   */
  async getEmployees() {
    try {
      const response = await Api().get('/employees');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
  * Método responsável por listar por Id um determinado 'Employee'
   * (GET): localhost:3000/api/employees/:id
   */ 
  async getEmployeeId(id) {
    try {
      const response = await Api().get(`/employees/${id}`);
      return response.data;  
    } catch (error) {
      return console.log(error);
    }
  },

  /**
  * Método responsável por atualizar um determinado 'Employee' por Id
  * (PUT): localhost:3000/api/employees/:id
  */
  async updateEmployee(id) {
    try {
      const response = await Api().put(`/employees/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
  * Método responsável por excluir um determinado 'Employee' por Id
  * (DELETE): localhost:3000/api/employees/:id
  */
  async deleteEmployee(id) {
    try {
      const response = await Api().delete(`employees/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};
