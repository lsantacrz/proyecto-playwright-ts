import { step } from 'allure-js-commons';

export class Logger {
  static async logStep(description: string): Promise<void> {
    await step('STEP - ' + description, () => {});
    }

    static async logVerification(description: string): Promise<void> {
      await step('VERIFICATION - ' + description, () => {});    
    }

    static async logPreCondition(description: string): Promise<void> {
      await step('PRE-CONDITION - ' + description, () => {});
    }

    static async logPostCondition(description: string): Promise<void> {
      await step('POST-CONDITION - ' + description, () => {});
    }
   
  }

