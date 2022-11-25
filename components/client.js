import Image from 'next/image'

export function Client() {
    return (
        <div>
<div class="py-16 px-4 mx-auto bg-white">
  <h4 class="text-4xl font-semibold text-center mb-10 dark:text-black">Clients we have worked with</h4>
  <Image class="mx-auto" src="/images/clients.jpg" width={800} height={120} />
</div>

</div>

        )
}
    
export default Client;