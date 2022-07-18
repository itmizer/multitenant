import { Controller, HttpResponse } from '@/presentation/protocols';

export const controllerAdapter = async (controller: Controller, request?: any): Promise<HttpResponse> => { 
  return await controller.handle(request);
}