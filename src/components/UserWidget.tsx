export default function UserWidget() {
  return (
    <div class="p-4 mx-2 relative mt-4 bg-white rounded-xl w-[250px] flex space-x-2 shadow-user-card">
      <div class="h-[120px] w-[120px] rounded-lg bg-gray-500 flex-none bg-[url('assets/images/main-headshot.jpg')] bg-cover bg-no-repeat"></div>
      <div class="space-y-1">
        <span class="flex items-center space-x-1 border border-[#1d1d1f1f] rounded-full py-1 px-2">
          <span class="h-3 w-3 rounded-full bg-[#D9D9D9]"></span>
          <span class="text-[#1D1D1F] text-[13px]">firstname</span>
        </span>
        <span class="flex items-center space-x-1 border border-[#1d1d1f1f] rounded-full py-1 px-2">
          <span class="h-3 w-3 rounded-full bg-[#D9D9D9]"></span>
          <span class="text-[#1D1D1F] text-[13px]">product</span>
        </span>
        <span class="flex items-center space-x-1 border border-[#1d1d1f1f] rounded-full py-1 px-2">
          <span class="h-3 w-3 rounded-full bg-[#D9D9D9]"></span>
          <span class="text-[#1D1D1F] text-[13px]">discount</span>
        </span>

        <span class="text-base text-[#1D1D1F]">+5 more</span>
      </div>
      <div class="absolute -bottom-3 -left-2 flex items-center -space-x-1">
        <span class="h-6 w-6 rounded-full bg-gray-500 block border border-white bg-[url('assets/images/headshot-1.png')] bg-cover bg-no-repeat"></span>
        <span class="h-6 w-6 rounded-full bg-gray-600 block border border-white bg-[url('assets/images/headshot-2.png')] bg-cover bg-no-repeat"></span>
        <span class="h-6 w-6 rounded-full bg-gray-700 block border border-white bg-[url('assets/images/headshot-3.png')] bg-cover bg-no-repeat"></span>
      </div>
    </div>
  );
}
