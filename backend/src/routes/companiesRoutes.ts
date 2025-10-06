import { Router } from 'express';
import getFilteredCompanies from '../middlewares/companies/get-filtered-companes';

const companiesRouter = Router();

companiesRouter.get('/companies', getFilteredCompanies);

export default companiesRouter;
