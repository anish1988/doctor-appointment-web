import express from 'express';
import { auth } from '../../middlewares/auth';
import { AuthUser } from '../../../enums';
import { AppointmentController } from './appointment.controller';


const router = express.Router();

//console.log("Ypu are in Appoinment Router here");
router.get('/', AppointmentController.getAllAppointment);
/*
router.get('/patient/appointments',auth(AuthUser.PATIENT), AppointmentController.getPatientAppointmentById);
router.get('/patient/invoices',auth(AuthUser.PATIENT), AppointmentController.getPatientPaymentInfo);
router.get('/doctor/invoices',auth(AuthUser.DOCTOR), AppointmentController.getDoctorInvoices);
*/
router.get('/doctor/appointments/:id', AppointmentController.getDoctorAppointmentsById);
router.get('/doctor/patients/:id',auth(AuthUser.DOCTOR), AppointmentController.getDoctorPatients);

router.get('/patient-payment-info/:id',auth(AuthUser.PATIENT, AuthUser.DOCTOR), AppointmentController.getPaymentInfoViaAppintmentId);

router.post('/tracking', AppointmentController.getAppointmentByTrackingId);
router.post('/create', AppointmentController.createAppointment);
router.post('/create-un-authenticate', AppointmentController.createAppointmentByUnAuthenticateUser);

// router.get('/:id', AppointmentController.getAppointment);

router.delete('/:id', AppointmentController.deleteAppointment);
router.patch('/:id', auth(AuthUser.ADMIN, AuthUser.DOCTOR, AuthUser.PATIENT),AppointmentController.updateAppointment);
//doctor side
router.patch('/doctor/update-appointment',auth(AuthUser.DOCTOR), AppointmentController.updateAppointmentByDoctor);
router.get('/getAppointmentCounts', AppointmentController.getAppointmentCounts);

export const AppointmentRouter = router;