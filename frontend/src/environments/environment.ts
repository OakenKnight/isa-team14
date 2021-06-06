// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8088',
  proba: "proba",
  medication: "medication",
  findAll: "findAll",
  add: "add",
  ingredients: "ingredients",
  allergy : "allergies",
  patient : "patient",
  register : "register",
  authenticate: 'authenticate',
  getUser: 'getUser',
  login:"login",
  admin:"admin",
  pharmacy : "pharmacy",
  pharmacyAdmin:"pharmacyAdmin",
  dermatologist : "dermatologist",
  supplier : "supplier",
  auth:"auth",
  getById: "getById",
  update : "update",
  editPatient: "editPatient",
  getLoggedInUser: "getLoggedIn",
  reservations : "reservations",
  getReservations : "getReservations",
  changepassword : "changepassword",
  getDermatologistToComplain : "getDermatologistToComplain",
  pharmacist:"pharmacist",
  getPharmacistToComplain : "getPharmacistToComplain",
  complaint:"complaint",
  getPharmacyToComplain : "getPharmacyToComplain",
  getUnanswered:"getUnanswered",
  answerComplaint : "answerComplaint",
  getUnansweredDermatologist : "getUnansweredDermatologist",
  getUnansweredPharmacist : "getUnansweredPharmacist",
  getUnansweredPharmacy : "getUnansweredPharmacy",
  order: "order",
  offer : "offer",
  findSuppliers : "findSuppliers",
  getByIdentifier : 'getByIdentifier',
  getOrderedMedicationByIdentifier : 'getOrderedMedicationByIdentifier',
  pharmacyStorage:'pharmacyStorage',
  getMedicationsInPharmacy:'getMedicationsInPharmacy',
  suppliersmedications : "suppliersmedications",
  getByMedication : "getByMedication",
  getByName:"getByName",
  findByMedication : "findByMedication",
  getByIds : "getByIds",
  pricelist : "pricelist",
  getByType : "getByType",
  getByForm : "getByForm",
  getByKind : "getByKind",
  getByPrescribing : "getByPrescribing",
  activation : "activation",
  subscribe : "subscribe",
  isSubscribed : "isSubscribed",
  getAllUsers : "getAllUsers",
  remove: "remove",
  getSubscribed : "getSubscribed",
  getByStatus: "getByStatus",
  getAllOrdersWehereOfferIsNotGivenBySupplier :"getAllOrdersWehereOfferIsNotGivenBySupplier",
  getByPharmacy:"getByPharmacy",
  appointment:"appointment",
  getAvailableExaminationsForDermatologist:"getAvailableExaminationsForDermatologist",
  getPharmacyByAdmin:"getPharmacyByAdmin",
  editPharmacy:"editPharmacy",
  getByMedicationAndPharmacy:"getByMedicationAndPharmacy",
  editPricelistEntity:"editPricelistEntity",
  promotion:"promotion",
  getPromotionsByPharmacy:"getPromotionsByPharmacy",
  getMedicationsByPharmacy:"getMedicationsByPharmacy",
  addPricelistEntity:"addPricelistEntity",
  deletePricelistEntity:"deletePricelistEntity",
  medicalRecord : "medicalRecord",
  getPatientIngredients : "getPatientIngredients",
  addPatientIngredient : "addPatientIngredient",
  updateEmployees : "updateEmployee",
  changeEmployeePass : "changeEmployeePass",
  firstTimePasswordChange : "firstEmployeeLogin",
  getFinishedPatientsCounselings : "getFinishedPatientsCounselings",
  getFinishedPatientsExaminations : "getFinishedPatientsExaminations",
  getNotFinishedAppointmentsForPatient : "getNotFinishedAppointmentsForPatient",
  cancelAppointment : "cancelAppointment",
  ePrescription : "ePrescription",
  getPatientEPrescriptions : "getPatientEPrescriptions",
  getPatientsByMedicalStaff : "getPatientsByMedicalStaff",
  searchPatients : "searchPatients",
  findReservations : "getReservationByIdentifier",
  issueReservation : "issueReservation",
  registerPharmacist : "registerPharmacist",
  deletePharmacist : "deletePharmacist",
  isDrugReserved:"isDrugReserved",
  getOrdersByPharmacy:"getOrdersByPharmacy",
  getByOrder:"getByOrder",
  medicationInOrder:"medicationInOrder",
  addMedicationInOrder:"addMedicationInOrder",
  findById:"findById",
  addOrder:"addOrder",
  chooseOffer:"chooseOffer",
  getAllPrescribedDrugForPatient : "getAllPrescribedDrugForPatient",
  scheduledAppointments : "getScheduledByDateAndStaff",
  findAvailableForEmployee : "getAppointmentsForEmployee",
  recommendMedications : "recommendMedicationByPatient",
  savePrescription : "savePrescription",
  prescription : "prescription",
  recommendSimilarMedication : "recommendSimilarMedication",
  savePenalty : "addPenalty",
  penalty : "penalty",
  reports : "report",
  saveReport : "saveReport",
  saveReservation : "saveReservation",
  scheduleAppointment : "scheduleAppointment",
  finishAppointment : "finishAppointment",
  getSpecificAppointment : "findSpecificAppointment",
  usersForEmployee : "usersForEmployee",
  searchUsers : "searchUsers",
  vacationRequest : "vacationRequest",
  sendVacationRequest : "saveVacationRequest",
  getPharmaciesByMedicationId : "getPharmaciesByMedicationId",
  availableForPatients : "findAvailableByPatient",
  appointmentsByMonth : "getScheduledByMonth",
  patientDrugReservation : "patientDrugReservation",
  getDrugReservationForPatient : "getDrugReservationForPatient",
  cancelDrugReservation : "cancelDrugReservation",
  workDay : "workDay",
  addWorkDay : "addWorkDay",
  addWorkDayForDermatologist:"addWorkDayForDermatologist",
  drugInquiry:"drugInquiryReport",
  getAll:"getAll",
  deleteDermatologistFromPharmacy:"deleteDermatologistFromPharmacy",
  getDermatologistNotInPharmacy:"getDermatologistsNotInPharmacy",
  getByMedicalStaff:"getByMedicalStaff",
  addDermatologistToPharmacy:"addDermatologistToPharmacy",
  occupiedCounselingExists:"occupiedCounselingsExists",
  occupiedExaminationsExists:"occupiedExaminationsExists",
  editPharmacyAdmin:"editPharmacyAdmin",
  approveVacationRequest:"approveVacationRequest",
  denyVacationRequest:"denyVacationRequest",
  searchDermatologists:"searchDermatologists",
  filterDermatologistsByPharmacy:"filterDermatologistsByPharmacy",
  filterDermatologistsByGrade:"filterDermatologistsByGrade",
  searchPharmacists:"searchPharmacists",
  filterPharmacistsByPharmacy:"filterPharmacistsByPharmacy",
  filterPharmacistsByGrade:"filterPharmacistsByGrade",
  findAvailablePharmacyByCounselingRange : "findAvailablePharmacyByCounselingRange",
  findByRangeAndPharmacy : "findByRangeAndPharmacy",
  findAndSchedulePatientCounseling : "findAndSchedulePatientCounseling",
  getNumberOfScheduledForMonth:"getNumberOfScheduledForMonth",
  getNumberOfScheduledForHalfYear:"getNumberOfScheduledForHalfYear",
  getNumberOfScheduledForYear:"getNumberOfScheduledForYear",
  getDrugConsumptionsForMonth:"getDrugConsumptionsForMonth",
  getDrugConsumptionsForHalfYear:"getDrugConsumptionsForHalfYear",
  getDrugConsumptionsForYear:"getDrugConsumptionsForYear",
  pharmacyBussinesReport:"pharmacyBussinesReport",
  getPharmacyIncomeForMonth:"getPharmacyIncomeForMonth",
  getPharmacyIncomeForHalfYear:"getPharmacyIncomeForHalfYear",
  getPharmacyIncomeForYear:"getPharmacyIncomeForYear",
  getAllByPharmacy:"getAllByPharmacy",
  newMedicationGrade : "newMedicationGrade",
  newPharmacyGrade : "newPharmacyGrade",
  newPharmacistGrade : "newPharmacistGrade",
  newDermatologistGrade : "newDermatologistGrade",
  updateGivenGrade : "updateGivenGrade",
  getPharmaciesForPatientGrading : "getPharmaciesForPatientGrading",
  findMedicationsForPatientGrading : "findMedicationsForPatientGrading",
  findPharmacistsForPatientGrading : "findPharmacistsForPatientGrading",
  findDermatologistsForPatientGrading : "findDermatologistsForPatientGrading",
  grade : "grade",
  getAllGradesByPatient : "getAllGradesByPatient",
  patientScheduleExamination : "patientScheduleExamination",
  getNumberOfPatientPenalties : "getNumberOfPatientPenalties"

};

