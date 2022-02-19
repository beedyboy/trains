import subscriberResolver from "./subscribers";  
import blogResolver from "./blogs";  
export let { getSubscriber, subscribers } = subscriberResolver
export let { blogs, getBlogBySlug } = blogResolver