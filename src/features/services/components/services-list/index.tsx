import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ServiceCard } from "../service-card";
import { servicesListData } from "./services-list.data";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { APP_ROUTES } from "@/constants/routes";
import SlideUpInView from "@/components/animations/animation-scroll/slide-up-in-view";

export const ServicesList = () => {
  return (
    <ContainerGridLayout spacing={4}>
      {servicesListData?.map((service: any) => {
        return (
          <ItemGridLayout md={4} key={service?._id}>
            <SlideUpInView height="100%">
              <ServiceCard
                Icon={service?.icon}
                heading={service?.heading}
                description={service?.description}
                btnLink={`${APP_ROUTES?.SERVICES_DETAIL}?id=${service?._id}`}
              />
            </SlideUpInView>
          </ItemGridLayout>
        );
      })}
    </ContainerGridLayout>
  );
};
