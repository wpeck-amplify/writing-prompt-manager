// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Events, Prompts, WritingGroups, Users, WritingGroupsUsers } = initSchema(schema);

export {
  Events,
  Prompts,
  WritingGroups,
  Users,
  WritingGroupsUsers
};