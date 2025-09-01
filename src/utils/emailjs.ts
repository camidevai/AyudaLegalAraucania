import emailjs from '@emailjs/browser';

// Configuración de EmailJS
export const emailjsConfig = {
  serviceId: 'service_2b4gail',
  templateId: 'template_qq1958k', // Template para notificación al abogado
  autoReplyTemplateId: 'template_ec7ze0l', // Template para respuesta automática al usuario
  publicKey: 'k7l0kMxYsLROE3DXO'
};

// Inicializar EmailJS
emailjs.init(emailjsConfig.publicKey);

// Función para enviar email de notificación al abogado
export const sendNotificationEmail = async (templateParams: Record<string, any>) => {
  try {
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    );
    return { success: true, response };
  } catch (error) {
    console.error('Error al enviar email de notificación:', error);
    return { success: false, error };
  }
};

// Función para enviar respuesta automática al usuario
export const sendAutoReply = async (templateParams: Record<string, any>) => {
  try {
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.autoReplyTemplateId,
      templateParams,
      emailjsConfig.publicKey
    );
    return { success: true, response };
  } catch (error) {
    console.error('Error al enviar respuesta automática:', error);
    return { success: false, error };
  }
};

// Función para enviar ambos emails (notificación + respuesta automática)
export const sendCompleteEmailFlow = async (templateParams: Record<string, any>) => {
  try {
    // Enviar notificación al abogado
    const notificationResult = await sendNotificationEmail(templateParams);

    if (!notificationResult.success) {
      throw new Error('Error al enviar notificación');
    }

    // Enviar respuesta automática al usuario
    const autoReplyResult = await sendAutoReply(templateParams);

    if (!autoReplyResult.success) {
      console.warn('Notificación enviada, pero falló la respuesta automática');
    }

    return {
      success: true,
      notificationSent: notificationResult.success,
      autoReplySent: autoReplyResult.success
    };
  } catch (error) {
    console.error('Error en el flujo completo de emails:', error);
    return { success: false, error };
  }
};

// Función para preparar los parámetros del template
export const prepareTemplateParams = (formData: any, formType: string) => {
  return {
    ...formData,
    date: new Date().toLocaleString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Santiago'
    }),
    form_type: formType
  };
};
