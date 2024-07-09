import Link from "next/link";

export default function Nav() {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <button className="absolute left-1/2 top-0 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-normalBlue">
        <svg
          className="stroke-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22V2M2 12H22"
            stroke="current"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <nav className="grid h-20 w-full grid-cols-2 items-center rounded-t-[20px] shadow-[5px_1px_6px_0px_#d9d9d9]">
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center text-xs leading-[18px] -tracking-wide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.1467 3.6033C12.0577 3.54013 11.9415 3.5407 11.8544 3.60254L4.58144 8.7638V20.1846C4.58144 20.3278 4.69597 20.444 4.83725 20.444H7.13956V14.9978C7.13956 12.2765 9.31566 10.0704 12 10.0704C14.6843 10.0704 16.8604 12.2765 16.8604 14.9978V20.444H19.1627C19.304 20.444 19.4186 20.3278 19.4186 20.1846V8.7638L12.1467 3.6033ZM20.9534 9.85303L21.7924 10.4484C22.1396 10.6948 22.6181 10.6092 22.8612 10.2572C23.1043 9.90517 23.0198 9.42005 22.6726 9.17364L13.0269 2.32855C12.4113 1.89167 11.5917 1.88956 10.9742 2.32778L1.32741 9.17364C0.98018 9.42005 0.895736 9.90517 1.13879 10.2572C1.38185 10.6092 1.86037 10.6948 2.2076 10.4484L3.04657 9.85303V20.1846C3.04657 21.1872 3.84828 22 4.83725 22H19.1627C20.1517 22 20.9534 21.1872 20.9534 20.1846V9.85303ZM15.3256 20.444V14.9978C15.3256 13.1358 13.8367 11.6264 12 11.6264C10.1633 11.6264 8.67444 13.1358 8.67444 14.9978V20.444H15.3256Z"
              fill="black"
            />
          </svg>
          <p>홈</p>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col items-center justify-center text-xs leading-[18px] -tracking-wide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.8516 1.17024C11.9508 1.14612 12.0547 1.1457 12.1541 1.16903L12.5574 1.26375C12.8303 1.32785 13.0217 1.55821 13.0217 1.82247V1.98185C13.0217 2.1346 12.9571 2.28109 12.8422 2.38909L11.5665 3.58752C11.4516 3.69553 11.387 3.84201 11.387 3.99476V4.95464H8.73045H5.46091C5.29833 4.95464 5.1424 5.01532 5.02743 5.12333L2.35931 7.62992C1.76756 8.18584 1.92944 9.12301 2.67796 9.47462L4.84787 10.4939V10.502V10.511V10.5202V10.5294V10.5388V10.5482V10.5578V10.5674V10.5771V10.587V10.5969V10.607V10.6171V10.6273V10.6377V10.6481V10.6586V10.6692V10.68V10.6908V10.7017V10.7127V10.7238V10.735V10.7463V10.7577V10.7691V10.7807V10.7924V10.8041V10.816V10.8279V10.84V10.8521V10.8643V10.8766V10.889V10.9015V10.914V10.9267V10.9394V10.9523V10.9652V10.9782V10.9913V11.0045V11.0178V11.0311V11.0446V11.0581V11.0717V11.0854V11.0992V11.1131V11.127V11.1411V11.1552V11.1694V11.1837V11.198V11.2125V11.227V11.2416V11.2563V11.2711V11.2859V11.3009V11.3159V11.331V11.3461V11.3614V11.3767V11.3921V11.4076V11.4232V11.4388V11.4545V11.4703V11.4862V11.5021V11.5181V11.5342V11.5504V11.5666V11.5829V11.5993V11.6157V11.6323V11.6489V11.6656V11.6823V11.6991V11.716V11.733V11.75V11.7671V11.7842V11.8015V11.8188V11.8362V11.8536V11.8711V11.8887V11.9063V11.924V11.9418V11.9596V11.9776V11.9956V12.0135V12.0316V12.0498V12.068V12.0863V12.1048V12.1232V12.1416V12.1602V12.1788V12.1975V12.2162V12.2349V12.2538V12.2727V12.2917V12.3107V12.3298V12.349V12.3682V12.3874V12.4068V12.4261V12.4456V12.4652V12.4846V12.5043V12.5239V12.5437V12.5634V12.5832V12.6032V12.6231V12.6431V12.6632V12.6832V12.7034V12.7237V12.7439V12.7642V12.7846V12.805V12.8255V12.846V12.8665V12.8871V12.9078V12.9285V12.9493V12.97V12.9909V13.0118V13.0328V13.0538V13.0748V13.0959V13.117V13.1382V13.1595V13.1807V13.202V13.2234V13.2449V13.2663V13.2878V13.3094V13.3309V13.3526V13.3742V13.3959V13.4176V13.4394V13.4613V13.4831V13.5051V13.5269V13.5489V13.5709V13.5931V13.6152V13.6373V13.6594V13.6816V13.7039V13.7262V13.7486V13.7709V13.7933V13.8157V13.8382V13.8606V13.8832V13.9058V13.9284V13.9509V13.9736V13.9963V14.0191V14.0418V14.0646V14.0874V14.1104V14.1332V14.1561V14.179V14.202V14.225V14.248V14.2711V14.2942V14.3173V14.3405V14.3636V14.3868V14.4101V14.4333V14.4566V14.4799V14.5031V14.5265V14.5499V14.5733V14.5967V14.6202V14.6435V14.667V14.6905V14.7141V14.7376V14.7613V14.7849V14.8085V14.8321V14.8557V14.8794V14.903V14.9268V14.9505V14.9742V14.9981V15.0218V15.0456V15.0694V15.0932V15.1171V15.1409V15.1649V15.1887V15.2127V15.2365V15.2605V15.2844V15.3084V15.3323V15.3564V15.3804V15.4043V15.4284V15.4525V15.4764V15.5005V15.5246V15.5486V15.5727V15.5968V15.621V15.6451V15.6691V15.6933V15.7174V15.7416V15.7657V15.7898V15.814V15.8382V15.8624V15.8865V15.9107V15.9349V15.959V15.9832V16.0074V16.0317V16.0559V16.0801V16.1043V16.1285V16.1527V16.1769V16.2012V16.2254V16.2495V16.2737V16.2979V16.3222V16.3464V16.3706V16.3948V16.419V16.4432V16.4674V16.4915V16.5157V16.5399V16.5641V16.5883V16.6125V16.6366V16.6607V16.6849V16.709V16.7332V16.7573V16.7815V16.8055V16.8296V16.8538V16.8779V16.9019V16.926V16.9501V16.974V16.9981V17.0222V17.0462V17.0702V17.0942V17.1181V17.1421V17.1661V17.19V17.214V17.2378V17.2618V17.2856V17.3095V17.3333V17.3571V17.381V17.4048V17.4286V17.4524V17.4761V17.4999V17.5236V17.5472V17.5709V17.5945V17.6183V17.6419V17.6655V17.689V17.7126V17.7361V17.7596V17.7831V17.8066V17.8301V17.8535V17.8769V17.9002V17.9236V17.9469V17.9703V17.9935V18.0168V18.04V18.0632V18.0864V18.1095V18.1327V18.1557V18.1789V18.2019V18.2248V18.2479V18.2708V18.2937V18.3166V18.3396V18.3624V18.3852V18.4079V18.4307V18.4534V18.476V18.4986V18.5213V18.5439V18.5663V18.5889V18.6114V18.6338V18.6562V18.6787V18.701V18.7232V18.7455V18.7677V18.7899V18.812V18.8341V18.8563V18.8783V18.9003V18.9223V18.9441V18.966V18.9879V19.0097V19.0315V19.0532V19.0749V19.0965V19.1181V19.1396V19.1612V19.1826V19.204V19.2254V19.2467V19.268V19.2892V19.3104V19.3316V19.3527C4.84787 19.4773 4.89091 19.5986 4.9705 19.6984C5.87045 20.8254 6.86088 21.66 8.02811 22.2082C9.19534 22.7564 10.5002 23 12 23C13.4998 23 14.8047 22.7564 15.9719 22.2082C17.1391 21.66 18.1295 20.8254 19.0295 19.6984C19.1091 19.5986 19.1521 19.4773 19.1521 19.3527V19.3316V19.3104V19.2892V19.268V19.2467V19.2254V19.204V19.1826V19.1612V19.1396V19.1181V19.0965V19.0749V19.0532V19.0315V19.0097V18.9879V18.966V18.9441V18.9223V18.9003V18.8783V18.8563V18.8341V18.812V18.7899V18.7677V18.7455V18.7232V18.701V18.6787V18.6562V18.6338V18.6114V18.5889V18.5663V18.5439V18.5213V18.4986V18.476V18.4534V18.4307V18.4079V18.3852V18.3624V18.3396V18.3166V18.2937V18.2708V18.2479V18.2248V18.2019V18.1789V18.1557V18.1327V18.1095V18.0864V18.0632V18.04V18.0168V17.9935V17.9703V17.9469V17.9236V17.9002V17.8769V17.8535V17.8301V17.8066V17.7831V17.7596V17.7361V17.7126V17.689V17.6655V17.6419V17.6183V17.5945V17.5709V17.5472V17.5236V17.4999V17.4761V17.4524V17.4286V17.4048V17.381V17.3571V17.3333V17.3095V17.2856V17.2618V17.2378V17.214V17.19V17.1661V17.1421V17.1181V17.0942V17.0702V17.0462V17.0222V16.9981V16.974V16.9501V16.926V16.9019V16.8779V16.8538V16.8296V16.8055V16.7815V16.7573V16.7332V16.709V16.6849V16.6607V16.6366V16.6125V16.5883V16.5641V16.5399V16.5157V16.4915V16.4674V16.4432V16.419V16.3948V16.3706V16.3464V16.3222V16.2979V16.2737V16.2495V16.2254V16.2012V16.1769V16.1527V16.1285V16.1043V16.0801V16.0559V16.0317V16.0074V15.9832V15.959V15.9349V15.9107V15.8865V15.8624V15.8382V15.814V15.7898V15.7657V15.7416V15.7174V15.6933V15.6691V15.6451V15.621V15.5968V15.5727V15.5486V15.5246V15.5005V15.4764V15.4525V15.4284V15.4043V15.3804V15.3564V15.3323V15.3084V15.2844V15.2605V15.2365V15.2127V15.1887V15.1649V15.1409V15.1171V15.0932V15.0694V15.0456V15.0218V14.9981V14.9742V14.9505V14.9268V14.903V14.8794V14.8557V14.8321V14.8085V14.7849V14.7613V14.7376V14.7141V14.6905V14.667V14.6435V14.6202V14.5967V14.5733V14.5499V14.5265V14.5031V14.4799V14.4566V14.4333V14.4101V14.3868V14.3636V14.3405V14.3173V14.2942V14.2711V14.248V14.225V14.202V14.179V14.1561V14.1332V14.1104V14.0874V14.0646V14.0418V14.0191V13.9963V13.9736V13.9509V13.9284V13.9058V13.8832V13.8606V13.8382V13.8157V13.7933V13.7709V13.7486V13.7262V13.7039V13.6816V13.6594V13.6373V13.6152V13.5931V13.5709V13.5489V13.5269V13.5051V13.4831V13.4613V13.4394V13.4176V13.3959V13.3742V13.3526V13.3309V13.3094V13.2878V13.2663V13.2449V13.2234V13.202V13.1807V13.1595V13.1382V13.117V13.0959V13.0748V13.0538V13.0328V13.0118V12.9909V12.97V12.9493V12.9285V12.9078V12.8871V12.8665V12.846V12.8255V12.805V12.7846V12.7642V12.7439V12.7237V12.7034V12.6832V12.6632V12.6431V12.6231V12.6032V12.5832V12.5634V12.5437V12.5239V12.5043V12.4846V12.4652V12.4456V12.4261V12.4068V12.3874V12.3682V12.349V12.3298V12.3107V12.2917V12.2727V12.2538V12.2349V12.2162V12.1975V12.1788V12.1602V12.1416V12.1232V12.1048V12.0863V12.068V12.0498V12.0316V12.0135V11.9956V11.9776V11.9596V11.9418V11.924V11.9063V11.8887V11.8711V11.8536V11.8362V11.8188V11.8015V11.7842V11.7671V11.75V11.733V11.716V11.6991V11.6823V11.6656V11.6489V11.6323V11.6157V11.5993V11.5829V11.5666V11.5504V11.5342V11.5181V11.5021V11.4862V11.4703V11.4545V11.4388V11.4232V11.4076V11.3921V11.3767V11.3614V11.3461V11.331V11.3159V11.3009V11.2859V11.2711V11.2563V11.2416V11.227V11.2125V11.198V11.1837V11.1694V11.1552V11.1411V11.127V11.1131V11.0992V11.0854V11.0717V11.0581V11.0446V11.0311V11.0178V11.0045V10.9913V10.9782V10.9652V10.9523V10.9394V10.9267V10.914V10.9015V10.889V10.8766V10.8643V10.8521V10.84V10.8279V10.816V10.8041V10.7924V10.7807V10.7691V10.7577V10.7463V10.735V10.7238V10.7127V10.7017V10.6908V10.68V10.6692V10.6586V10.6481V10.6377V10.6273V10.6171V10.607V10.5969V10.587V10.5771V10.5674V10.5578V10.5482V10.5388V10.5294V10.5202V10.511V10.502V10.4939L21.322 9.47462C22.0705 9.12301 22.2325 8.18584 21.6407 7.62992L18.9726 5.12333C18.8576 5.01532 18.7016 4.95464 18.5391 4.95464H15.2696H12.613V4.23331L13.7092 3.20356C14.054 2.87954 14.2478 2.44009 14.2478 1.98185V1.82247C14.2478 1.02967 13.6735 0.338602 12.8548 0.146311L12.4515 0.0515907C12.1534 -0.0184096 11.8415 -0.0171567 11.5441 0.0552344L11.1874 0.142056C10.3762 0.339535 9.80962 1.02728 9.80962 1.81458V2.45895C9.80962 2.77703 10.0841 3.03487 10.4227 3.03487C10.7612 3.03487 11.0357 2.77703 11.0357 2.45895V1.81458C11.0357 1.55215 11.2245 1.3229 11.495 1.25707L11.8516 1.17024ZM6.07395 10.138V6.10648H8.11742V8.02623C8.11742 8.66238 8.66636 9.17807 9.34349 9.17807H14.6566C15.3336 9.17807 15.8826 8.66238 15.8826 8.02623V6.10648H17.926V10.138V10.1396V10.1411V10.1431V10.1443V10.1457V10.1471V10.1487V10.1504V10.1522V10.1542V10.1563V10.1584V10.1608V10.1632V10.1658V10.1685V10.1713V10.1742V10.1772V10.1804V10.1837V10.1871V10.1906V10.1943V10.198V10.2019V10.2059V10.21V10.2142V10.2186V10.2231V10.2276V10.2323V10.2371V10.2421V10.2471V10.2523V10.2575V10.2629V10.2684V10.274V10.2798V10.2856V10.2915V10.2976V10.3037V10.31V10.3164V10.3229V10.3295V10.3362V10.3431V10.35V10.3571V10.3642V10.3715V10.3788V10.3863V10.3939V10.4016V10.4094V10.4173V10.4253V10.4334V10.4416V10.4499V10.4583V10.4669V10.4755V10.4842V10.4931V10.502V10.511V10.5202V10.5294V10.5388V10.5482V10.5578V10.5674V10.5771V10.587V10.5969V10.607V10.6171V10.6273V10.6377V10.6481V10.6586V10.6692V10.68V10.6908V10.7017V10.7127V10.7238V10.735V10.7463V10.7577V10.7691V10.7807V10.7924V10.8041V10.816V10.8279V10.84V10.8521V10.8643V10.8766V10.889V10.9015V10.914V10.9267V10.9394V10.9523V10.9652V10.9782V10.9913V11.0045V11.0178V11.0311V11.0446V11.0581V11.0717V11.0854V11.0992V11.1131V11.127V11.1411V11.1552V11.1694V11.1837V11.198V11.2125V11.227V11.2416V11.2563V11.2711V11.2859V11.3009V11.3159V11.331V11.3461V11.3614V11.3767V11.3921V11.4076V11.4232V11.4388V11.4545V11.4703V11.4862V11.5021V11.5181V11.5342V11.5504V11.5666V11.5829V11.5993V11.6157V11.6323V11.6489V11.6656V11.6823V11.6991V11.716V11.733V11.75V11.7671V11.7842V11.8015V11.8188V11.8362V11.8536V11.8711V11.8887V11.9063V11.924V11.9418V11.9596V11.9776V11.9956V12.0135V12.0316V12.0498V12.068V12.0863V12.1048V12.1232V12.1416V12.1602V12.1788V12.1975V12.2162V12.2349V12.2538V12.2727V12.2917V12.3107V12.3298V12.349V12.3682V12.3874V12.4068V12.4261V12.4456V12.4652V12.4846V12.5043V12.5239V12.5437V12.5634V12.5832V12.6032V12.6231V12.6431V12.6632V12.6832V12.7034V12.7237V12.7439V12.7642V12.7846V12.805V12.8255V12.846V12.8665V12.8871V12.9078V12.9285V12.9493V12.97V12.9909V13.0118V13.0328V13.0538V13.0748V13.0959V13.117V13.1382V13.1595V13.1807V13.202V13.2234V13.2449V13.2663V13.2878V13.3094V13.3309V13.3526V13.3742V13.3959V13.4176V13.4394V13.4613V13.4831V13.5051V13.5269V13.5489V13.5709V13.5931V13.6152V13.6373V13.6594V13.6816V13.7039V13.7262V13.7486V13.7709V13.7933V13.8157V13.8382V13.8606V13.8832V13.9058V13.9284V13.9509V13.9736V13.9963V14.0191V14.0418V14.0646V14.0874V14.1104V14.1332V14.1561V14.179V14.202V14.225V14.248V14.2711V14.2942V14.3173V14.3405V14.3636V14.3868V14.4101V14.4333V14.4566V14.4799V14.5031V14.5265V14.5499V14.5733V14.5967V14.6202V14.6435V14.667V14.6905V14.7141V14.7376V14.7613V14.7849V14.8085V14.8321V14.8557V14.8794V14.903V14.9268V14.9505V14.9742V14.9981V15.0218V15.0456V15.0694V15.0932V15.1171V15.1409V15.1649V15.1887V15.2127V15.2365V15.2605V15.2844V15.3084V15.3323V15.3564V15.3804V15.4043V15.4284V15.4525V15.4764V15.5005V15.5246V15.5486V15.5727V15.5968V15.621V15.6451V15.6691V15.6933V15.7174V15.7416V15.7657V15.7898V15.814V15.8382V15.8624V15.8865V15.9107V15.9349V15.959V15.9832V16.0074V16.0317V16.0559V16.0801V16.1043V16.1285V16.1527V16.1769V16.2012V16.2254V16.2495V16.2737V16.2979V16.3222V16.3464V16.3706V16.3948V16.419V16.4432V16.4674V16.4915V16.5157V16.5399V16.5641V16.5883V16.6125V16.6366V16.6607V16.6849V16.709V16.7332V16.7573V16.7815V16.8055V16.8296V16.8538V16.8779V16.9019V16.926V16.9501V16.974V16.9981V17.0222V17.0462V17.0702V17.0942V17.1181V17.1421V17.1661V17.19V17.214V17.2378V17.2618V17.2856V17.3095V17.3333V17.3571V17.381V17.4048V17.4286V17.4524V17.4761V17.4999V17.5236V17.5472V17.5709V17.5945V17.6183V17.6419V17.6655V17.689V17.7126V17.7361V17.7596V17.7831V17.8066V17.8301V17.8535V17.8769V17.9002V17.9236V17.9469V17.9703V17.9935V18.0168V18.04V18.0632V18.0864V18.1095V18.1327V18.1557V18.1789V18.2019V18.2248V18.2479V18.2708V18.2937V18.3166V18.3396V18.3624V18.3852V18.4079V18.4307V18.4534V18.476V18.4986V18.5213V18.5439V18.5663V18.5889V18.5966C17.3867 18.4441 16.9021 18.2809 16.4209 18.1187C16.1147 18.0155 15.8098 17.9128 15.4929 17.8136C14.469 17.4928 13.4041 17.241 12 17.241C10.5959 17.241 9.53103 17.4928 8.5071 17.8136C8.19021 17.9128 7.88531 18.0155 7.57906 18.1187C7.09786 18.2809 6.61336 18.4441 6.07395 18.5966V18.5889V18.5663V18.5439V18.5213V18.4986V18.476V18.4534V18.4307V18.4079V18.3852V18.3624V18.3396V18.3166V18.2937V18.2708V18.2479V18.2248V18.2019V18.1789V18.1557V18.1327V18.1095V18.0864V18.0632V18.04V18.0168V17.9935V17.9703V17.9469V17.9236V17.9002V17.8769V17.8535V17.8301V17.8066V17.7831V17.7596V17.7361V17.7126V17.689V17.6655V17.6419V17.6183V17.5945V17.5709V17.5472V17.5236V17.4999V17.4761V17.4524V17.4286V17.4048V17.381V17.3571V17.3333V17.3095V17.2856V17.2618V17.2378V17.214V17.19V17.1661V17.1421V17.1181V17.0942V17.0702V17.0462V17.0222V16.9981V16.974V16.9501V16.926V16.9019V16.8779V16.8538V16.8296V16.8055V16.7815V16.7573V16.7332V16.709V16.6849V16.6607V16.6366V16.6125V16.5883V16.5641V16.5399V16.5157V16.4915V16.4674V16.4432V16.419V16.3948V16.3706V16.3464V16.3222V16.2979V16.2737V16.2495V16.2254V16.2012V16.1769V16.1527V16.1285V16.1043V16.0801V16.0559V16.0317V16.0074V15.9832V15.959V15.9349V15.9107V15.8865V15.8624V15.8382V15.814V15.7898V15.7657V15.7416V15.7174V15.6933V15.6691V15.6451V15.621V15.5968V15.5727V15.5486V15.5246V15.5005V15.4764V15.4525V15.4284V15.4043V15.3804V15.3564V15.3323V15.3084V15.2844V15.2605V15.2365V15.2127V15.1887V15.1649V15.1409V15.1171V15.0932V15.0694V15.0456V15.0218V14.9981V14.9742V14.9505V14.9268V14.903V14.8794V14.8557V14.8321V14.8085V14.7849V14.7613V14.7376V14.7141V14.6905V14.667V14.6435V14.6202V14.5967V14.5733V14.5499V14.5265V14.5031V14.4799V14.4566V14.4333V14.4101V14.3868V14.3636V14.3405V14.3173V14.2942V14.2711V14.248V14.225V14.202V14.179V14.1561V14.1332V14.1104V14.0874V14.0646V14.0418V14.0191V13.9963V13.9736V13.9509V13.9284V13.9058V13.8832V13.8606V13.8382V13.8157V13.7933V13.7709V13.7486V13.7262V13.7039V13.6816V13.6594V13.6373V13.6152V13.5931V13.5709V13.5489V13.5269V13.5051V13.4831V13.4613V13.4394V13.4176V13.3959V13.3742V13.3526V13.3309V13.3094V13.2878V13.2663V13.2449V13.2234V13.202V13.1807V13.1595V13.1382V13.117V13.0959V13.0748V13.0538V13.0328V13.0118V12.9909V12.97V12.9493V12.9285V12.9078V12.8871V12.8665V12.846V12.8255V12.805V12.7846V12.7642V12.7439V12.7237V12.7034V12.6832V12.6632V12.6431V12.6231V12.6032V12.5832V12.5634V12.5437V12.5239V12.5043V12.4846V12.4652V12.4456V12.4261V12.4068V12.3874V12.3682V12.349V12.3298V12.3107V12.2917V12.2727V12.2538V12.2349V12.2162V12.1975V12.1788V12.1602V12.1416V12.1232V12.1048V12.0863V12.068V12.0498V12.0316V12.0135V11.9956V11.9776V11.9596V11.9418V11.924V11.9063V11.8887V11.8711V11.8536V11.8362V11.8188V11.8015V11.7842V11.7671V11.75V11.733V11.716V11.6991V11.6823V11.6656V11.6489V11.6323V11.6157V11.5993V11.5829V11.5666V11.5504V11.5342V11.5181V11.5021V11.4862V11.4703V11.4545V11.4388V11.4232V11.4076V11.3921V11.3767V11.3614V11.3461V11.331V11.3159V11.3009V11.2859V11.2711V11.2563V11.2416V11.227V11.2125V11.198V11.1837V11.1694V11.1552V11.1411V11.127V11.1131V11.0992V11.0854V11.0717V11.0581V11.0446V11.0311V11.0178V11.0045V10.9913V10.9782V10.9652V10.9523V10.9394V10.9267V10.914V10.9015V10.889V10.8766V10.8643V10.8521V10.84V10.8279V10.816V10.8041V10.7924V10.7807V10.7691V10.7577V10.7463V10.735V10.7238V10.7127V10.7017V10.6908V10.68V10.6692V10.6586V10.6481V10.6377V10.6273V10.6171V10.607V10.5969V10.587V10.5771V10.5674V10.5578V10.5482V10.5388V10.5294V10.5202V10.511V10.502V10.4931V10.4842V10.4755V10.4669V10.4583V10.4499V10.4416V10.4334V10.4253V10.4173V10.4094V10.4016V10.3939V10.3863V10.3788V10.3715V10.3642V10.3571V10.35V10.3431V10.3362V10.3295V10.3229V10.3164V10.31V10.3037V10.2976V10.2915V10.2856V10.2798V10.274V10.2684V10.2629V10.2575V10.2523V10.2471V10.2421V10.2371V10.2323V10.2276V10.2231V10.2186V10.2142V10.21V10.2059V10.2019V10.198V10.1943V10.1906V10.1871V10.1837V10.1804V10.1772V10.1742V10.1713V10.1685V10.1658V10.1632V10.1608V10.1584V10.1563V10.1542V10.1522V10.1504V10.1487V10.1471V10.1457V10.1443V10.1431V10.1411V10.1396V10.138ZM4.84787 9.20609V6.92096L3.22627 8.44438L4.84787 9.20609ZM9.34349 8.02623V6.10648H12H14.6566V8.02623H9.34349ZM20.7737 8.44438L19.1521 6.92096V9.20609L20.7737 8.44438ZM15.947 19.1834C16.417 19.3415 16.9199 19.511 17.4713 19.6702C16.8315 20.3398 16.1595 20.8324 15.4236 21.1779C14.4633 21.629 13.3553 21.8482 12 21.8482C10.6447 21.8482 9.53666 21.629 8.5764 21.1779C7.84057 20.8324 7.16854 20.3398 6.52869 19.6702C7.08007 19.511 7.58307 19.3415 8.05305 19.1834C8.34518 19.085 8.62457 18.9909 8.89487 18.9063C9.84399 18.6091 10.7718 18.3929 12 18.3929C13.2281 18.3929 14.156 18.6091 15.1052 18.9063C15.3754 18.9909 15.6548 19.085 15.947 19.1834ZM11.1292 12.654C11.4875 12.5762 11.6807 12.0328 11.5608 11.44C11.4409 10.8471 11.0532 10.4295 10.6949 10.5071C10.3366 10.5848 10.1434 11.1283 10.2633 11.7211C10.3832 12.3139 10.7709 12.7316 11.1292 12.654ZM9.82743 12.4239C10.2015 12.89 10.2764 13.4639 9.9948 13.7058C9.71319 13.9476 9.18169 13.766 8.80765 13.2998C8.43361 12.8338 8.35867 12.2598 8.64028 12.018C8.92188 11.7762 9.45339 11.9579 9.82743 12.4239ZM12.4857 12.654C12.1274 12.5762 11.9341 12.0328 12.0541 11.44C12.174 10.8471 12.5617 10.4295 12.92 10.5071C13.2783 10.5848 13.4715 11.1283 13.3516 11.7211C13.2317 12.3139 12.844 12.7316 12.4857 12.654ZM13.7878 12.4238C13.4139 12.8901 13.339 13.4641 13.6205 13.7061C13.9021 13.9479 14.4334 13.7662 14.8074 13.3C15.1813 12.8339 15.2562 12.2598 14.9747 12.0179C14.6931 11.7759 14.1617 11.9577 13.7878 12.4238ZM11.5915 16.1245C10.6834 16.1307 9.98253 16.1355 9.98253 15.3008C9.98253 14.3923 10.8127 12.8334 11.8367 12.8334C12.8607 12.8334 13.6908 14.3923 13.6908 15.3008C13.6908 16.1355 12.99 16.1307 12.0819 16.1245C12.0017 16.1239 11.9198 16.1233 11.8367 16.1233C11.7536 16.1233 11.6717 16.1239 11.5915 16.1245Z"
              fill="black"
            />
          </svg>
          <p>룩북</p>
        </Link>
      </nav>
    </div>
  );
}
