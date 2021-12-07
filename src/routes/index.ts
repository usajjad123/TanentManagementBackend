import { Router } from 'express';
import { authRouter } from './Routers/AuthRoutes';
import { landLordRouter } from './Routers/LandlordRoutes';
import { tenantRouter } from './Routers/TenantRoutes';
import { proServicesRouter } from './Routers/ProServicesRoutes';
import { feedBackRouter } from './Routers/CommonRoutes'

// Export the starting Routes
const baseRouter = Router();
baseRouter.use('/auth', authRouter)
baseRouter.use('/landlord', landLordRouter);
baseRouter.use('/proservices', proServicesRouter);
baseRouter.use('/tenant', tenantRouter);
baseRouter.use('/feedback', feedBackRouter);

export default baseRouter;
